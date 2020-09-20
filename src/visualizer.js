import React from 'react';
import './App.css';
import Bar from './bar';

const listSize        = 30;
const delayTime       = 100;
const defaultColor    = '#61dafb';
const accessListColor = '#f82aff';
const swapItemColor   = '#34d492'
const pivotColor      = 'white';
// const swapItemColor   = '#00ff9d';


function fillArray(value, len) {
    var arr = new Array(len);;
    for (var i = 0; i < len; i++) {
      arr[i] = value;
    }
    return arr;
}

class Visualizer extends React.Component {
    constructor(){
        super();
        this.state = {
            array: Array.from(Array(listSize).keys()),
            colors: fillArray(defaultColor, listSize)
        }
        const {array}    = this.state; 
        this.totalWidth  = 70;
        this.totalHeight = 60;
        this.barWidth    = this.totalWidth/array.length;
        this.barHeight   = this.totalHeight/array.length;
        this.margin      = this.barwidth*0.3;
    }

    bubbleSort(arr){
        let tempArr = JSON.parse(JSON.stringify(arr));
        let states = [];
        let colors = [];
        let delays = [];
        let iter   = 0;
        if(this.isSorted(tempArr)){
            return;
        }
        for(let i = 0; i<arr.length; i++){
            for(let j = 0; j<arr.length-i-1; j++){
                iter++;
                let color  = fillArray(defaultColor, listSize);
                color[j]   = accessListColor;
                colors.push(color);
                states.push(JSON.parse(JSON.stringify(tempArr)));
                delays.push(iter);
                if(tempArr[j]>tempArr[j+1]){
                    iter++;
                    let temp     = tempArr[j];
                    tempArr[j]   = tempArr[j+1];
                    tempArr[j+1] = temp;
                    let color    = fillArray(defaultColor, listSize);
                    color[j+1]     = swapItemColor;
                    colors.push(color);
                    states.push(JSON.parse(JSON.stringify(tempArr)));
                    delays.push(iter);
                }
                if(this.isSorted(tempArr)){
                    break;
                }
            }
            if(this.isSorted(tempArr)){
                break;
            }
        }
        states.push(states[states.length - 1]);
        colors.push(fillArray(defaultColor, listSize));
        delays.push(iter+1);
        for(let i=0; i<states.length; i++){
            setTimeout(()=>{this.setState(
                    { array: states[i], colors: colors[i] }
                )}, delays[i]*delayTime);
        }
    }
    
    insertionSort(arr){
        let tempArr = JSON.parse(JSON.stringify(arr));
        let states = [];
        let colors = [];
        let delays = [];
        let iter   = 0;
        for(let i = 1; i<arr.length; i++){
            for(let j = i; j>=0; j--){
                iter++;
                let color  = fillArray(defaultColor, listSize);
                color[j]   = accessListColor;
                // color[j+1] = accessListColor;
                colors.push(color);
                states.push(JSON.parse(JSON.stringify(tempArr)));
                delays.push(iter);
                if(tempArr[j]<tempArr[j-1]){
                    iter++;
                    let temp     = tempArr[j];
                    tempArr[j]   = tempArr[j-1];
                    tempArr[j-1] = temp;

                    let color    = fillArray(defaultColor, listSize);
                    color[j-1]   = swapItemColor;
                    // color[j+1]   = swapItemColor;
                    colors.push(color);
                    states.push(JSON.parse(JSON.stringify(tempArr)));
                    delays.push(iter);
                    if(this.isSorted(tempArr)){
                        break;
                    }
                }
                else{
                    break;
                }

            }
        }
        states.push(states[states.length - 1]);
        colors.push(fillArray(defaultColor, listSize));
        delays.push(iter+1);
        for(let i=0; i<states.length; i++){
            setTimeout(()=>{this.setState(
                    { array: states[i], colors: colors[i] }
                )}, delays[i]*delayTime);
        }
    }

    quickSort(arr){
        let array = JSON.parse(JSON.stringify(arr));
        var smaller = []; 
        var larger = [];
        if (array.length <=1)
            return array;
        let pivot = array[array.length-1];
        for (var i = 0; i < array.length-1; i++) { 
            if (array[i] <= pivot){
                smaller.push(array[i]); 
            }
            else{
                larger.push(array[i]); 
            }
        }
        console.log(smaller, [pivot], larger);
        return this.quickSort(smaller).concat([pivot]).concat(this.quickSort(larger));
    }

    quickSort2(arr, start, end, iter){
        let array = arr.slice(start, end);
        let states = [];
        let colors = [];
        let delays = [];
        if (array.length < 2 || this.isSorted(array) || this.isSorted(arr)){
            return iter;
        }
        let pivot     = arr[end-1];
        let pivot_ind = end-1;
        let i = start;
        let swaps = 0;
        while(i < pivot_ind) { 
            iter+=1;
            let color  = fillArray(defaultColor, listSize);
            color[i]   = accessListColor;
            color[pivot_ind] = pivotColor;
            colors.push(color);
            states.push(JSON.parse(JSON.stringify(arr)));
            delays.push(iter);
            let num = arr[i];
            if (num > pivot){ 
                iter+=1;
                arr.splice(i, 1);
                arr.splice(pivot_ind, 0, num);
                swaps+=1;
                pivot_ind-=1;
                let color  = fillArray(defaultColor, listSize);
                color[pivot_ind+1]   = swapItemColor;
                color[pivot_ind] = pivotColor;
                colors.push(color);
                states.push(JSON.parse(JSON.stringify(arr)));
                delays.push(iter);
            }
            else{
                i+=1;
            }
        }
        states.push(states[states.length - 1]);
        colors.push(fillArray(defaultColor, listSize));
        delays.push(iter+1);
        for(let i=0; i<states.length; i++){
            setTimeout(()=>{this.setState(
                    { array: states[i], colors: colors[i] }
                )}, delays[i]*delayTime);
        }
        iter = this.quickSort2(arr, start, pivot_ind, iter);
        iter = this.quickSort2(arr, pivot_ind+1, pivot_ind+swaps+1, iter);
        return iter;
    }
    shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        this.setState({array: arr});
    }

    reversedArray(){
        this.setState({array: Array.from(Array(listSize).keys()).reverse()});
    }

    arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;
      
        for (var i = 0; i < a.length; ++i) {
          if (a[i] !== b[i]) return false;
        }
        return true;
      }

    isSorted(arr){
        return this.arraysEqual(arr, Array.from(Array(arr.length).keys()));
    }

    render (){
        let {array, colors} = this.state;
        const auxList = Array.from(Array(listSize).keys());
        array = JSON.parse(JSON.stringify(array));

        return (
        <div className="visualizer-container">
            <div className="array-container">
                {auxList.map(index => (
                    <Bar key={index} width={this.barWidth*0.7} height={this.barHeight * (array[index]+1)} margin={this.barWidth*0.3} color={colors[index]}/>
                ))
                }
            </div>
            <div className="button-container">
                <button className="button" onClick={()=> {this.reversedArray(array);}}>Reversed Array</button>
                <button className="button" onClick={()=> {this.shuffle(array);}}>Shuffle Array</button>
                <button className="button" onClick={()=> {this.bubbleSort(array);}}>BubbleSort</button>
                <button className="button" onClick={()=> {this.insertionSort(array)}}>Insertion Sort</button>
                <button className="button" onClick={()=> {this.quickSort2(array, 0, array.length, 0)}}>Quick Sort</button>
            </div>
      </div>);
    };
  }
  
  export default Visualizer;
  