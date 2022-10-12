import { useState, useEffect } from "react";

export default function useStoneitySortHook(defaultValue){
    const [sortedList, setSortedList] = useState(defaultValue)
    let newSortedList = [];
    

    function addNewNumber (item) {
        setSortedList((algorithm(),a => [...a, item])) 
       // console.log(newSortedList);
    }
    
    function algorithm(){
        
        let sortArray;
        sortArray = sortedList.sort(function (a, b) {
            return a - b;
          });
         
        if (sortedList.length % 2 === 0) {
            for (let i = 0; i < sortedList.length; i++) {
              if (i % 2 === 0) {
                newSortedList.push(sortArray[i]);
              } else {
                newSortedList.unshift(sortArray[i]);
              }
            }
          } else {
            for (let i = 0; i < sortedList.length; i++) {
              if (i % 2 === 0) {
                newSortedList.unshift(sortArray[i]);
              } else {
                newSortedList.push(sortArray[i]);
              }
            }
          }
        
        //console.log(newSortedList)
        return newSortedList;
    }   

    useEffect(() => {
        const response = algorithm();
         console.log('last sortedList = ',response);
       }, [sortedList]);

    // function addNewNumber (item){
    //     sortedList.push(item)
        
       
    // }
    // setSortedList(algorithm())





    return {sortedList, set: setSortedList, addNewNumber, algorithm}
}