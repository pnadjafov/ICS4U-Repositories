package com.bayviewglen.assignments;

public class TwoDimentionalArrayExample {
	public static void main(String[] args){
		int[][] array1 = {
				{10, 11, 12, 13},
				{14, 15, 16, 17},
				{18, 19, 20, 21},
				{22, 23, 24, 25},
				{26, 27, 28, 29},



		};
		display(array1);
		System.out.println("\n");
		switcher(0, 2, array1);
		display(array1);
	}

	public static int[][] switcher(int col1, int col2, int[][] givenArray){
		int temp = 0;
		for(int i = 0; i<givenArray[0].length; i++){
			temp = givenArray[i][col1];
			givenArray[i][col1] = givenArray[i][col2];
			givenArray[i][col2] = temp;
		}

		return givenArray;
	}

	public static void display(int[][] arr){
		for(int i = 0; i<arr.length; i++){
			for(int j = 0; j<arr[0].length; j++){
				System.out.print(arr[i][j] + "\t");
			}
			System.out.println();
		}
	}
}

