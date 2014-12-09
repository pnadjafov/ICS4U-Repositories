package com.bayviewglen.questions;

public class BadNeighbors {
	
	public static void main(String[] args){
		int[] neighbors1 = { 94, 40, 49, 65, 21, 21, 106, 80, 92, 81, 679, 4, 61,  
				6, 237, 12, 72, 74, 29, 95, 265, 35, 47, 1, 61, 397,
				52, 72, 37, 51, 1, 81, 45, 435, 7, 36, 57, 86, 81, 72 };
		System.out.println("Maximum possible funds to save the well: $" + doorToDoor(neighbors1) + ".");

		int[] neighbors2 = { 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 };
		System.out.println("Maximum possible funds to save the well: $" + doorToDoor(neighbors2) + ".");
	}

	public static int doorToDoor(int[] neighbors){
		if(neighbors.length == 0){ // If the array is empty, simply return 0.
			return 0;
		}else if(neighbors.length == 1){ // If the array has one value, return the first value.
			return neighbors[0];
		}else if(neighbors.length == 2){ // If the array has two values, return the greater of the two values.
			return Math.max(neighbors[0], neighbors[1]);
		}else if(neighbors.length == 3){ // If the array has three values, return the greater value of the three values.
			return Math.max(Math.max(neighbors[0], neighbors[1]), neighbors[2]);
		}else{
			int[] solutionsOne = new int[neighbors.length]; 
			int[] solutionsTwo = new int[neighbors.length];
			solutionsOne[0] = neighbors[0]; // Solve when considering the first value and not the last one.
			for (int i = 2; i < neighbors.length - 1; i++){ 
			solutionsOne[i] = Math.max(solutionsOne[i - 2] + neighbors[i], solutionsOne[i - 1]); // Checks if the solution to the number before
			} // the current index is bigger than the solution to the neighbor 2 elements before it, 
			  //including its own value. Whichever solution is bigger will be stored in the solutionsOne array.
			solutionsTwo[1] = neighbors[1]; // Solve when considering the last value and not the first one.
			for (int i = 2; i < neighbors.length; i++){
			solutionsTwo[i] = Math.max(solutionsTwo[i - 2] + neighbors[i], solutionsTwo[i - 1]); // Same statement as above, but the greater solution is stored in the solutionsTwo array.
			}
			return Math.max(solutionsOne[solutionsOne.length - 2], solutionsTwo[solutionsTwo.length - 1]); // Return the greater value between the two solution arrays.
			}
		}
}
