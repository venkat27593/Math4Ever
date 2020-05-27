import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-simple-graph',
  templateUrl: './simple-graph.component.html',
  styleUrls: ['./simple-graph.component.scss']
})
export class SimpleGraphComponent implements OnInit {
  @Input() rowLength : number = 10 ;
  @Input() columnLength : number = 10 ;
  totalRows : number [] = [];
  totalColumns : number[] = [];
  graphData : number[][] = [] ;

  constructor() { }

  ngOnInit() {
    this.initializeIndex(this.totalRows,this.rowLength);
    this.initializeIndex(this.totalColumns,this.columnLength);
    this.initializeGraphData(this.graphData);
  }
  initializeGraphData(graphData: number[][]) {
    for(var i=0 ; i<this.rowLength ; i++){
      this.graphData.push([]);
    }
    this.graphData.forEach(element => {
     element = this.getSingleRow(element);
    });
    console.log(this.graphData);
  }
  getSingleRow(element: number[]): number[] {
    for (let index = 0; index < this.columnLength; index++) {
     element.push(-1);
    }
    return element ;
  }
 
  initializeIndex(totalRows: number[], rowLength: number) {
    for (let index = 0; index < rowLength + 1; index++) {
      totalRows[index] = index ;
    }
  }

  getColor(row : number , col : number){
    if(row-1!= -1 && col-1 != -1){
      if(this.graphData[row-1][col-1] != -1){
        return "red"
      }
      return "white";
    }else{
      return "grey ";
    }
    
  }
  markThisCell(row,col){
    this.graphData[row-1][col-1] = 1 ;
  }
}
