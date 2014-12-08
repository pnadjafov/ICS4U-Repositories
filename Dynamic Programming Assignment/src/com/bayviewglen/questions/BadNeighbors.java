package com.bayviewglen.questions;

public class BadNeighbors {
	public static void main(String[] args) {
		int[] neighbors1 = { 94, 40, 49, 65, 21, 21, 106, 80, 92, 81, 679, 4, 61,  
				  6, 237, 12, 72, 74, 29, 95, 265, 35, 47, 1, 61, 397,
				  52, 72, 37, 51, 1, 81, 45, 435, 7, 36, 57, 86, 81, 72 };
		System.out.println("Maximum possible funds to save the well: $" + doorToDoor(neighbors1) + ".");
		
		int[] neighbors2 = { 7, 7, 7, 7, 7, 7, 7};
		System.out.println("Maximum possible funds to save the well: $" + doorToDoor(neighbors2) + ".");
	}

	public static int doorToDoor(int[] neighbors){
		if(neighbors.length == 0){
			return 0;
		}else if(neighbors.length == 1){
			return neighbors[0];
		}else if(neighbors.length == 2){
			return Math.max(neighbors[0], neighbors[1]);
		}else if(neighbors.length == 3){
			return Math.max(Math.max(neighbors[0], neighbors[1]), neighbors[2]);
		}else{
			int[] funds = new int[neighbors.length];
			boolean firstIndex = false;
			funds[0] = neighbors[0];
			funds[1] = Math.max(neighbors[0], neighbors[1]);
			if(funds[1] == neighbors[0]){
				firstIndex = true;
			}else if(funds[0] + funds[2] > funds[1]){
				firstIndex = true;
			}
			for(int i = 2; i<neighbors.length; i++){
				if(i == neighbors.length-1 && firstIndex){
					if(funds[i-2] - neighbors[0] + neighbors[i] > funds[i-2]){
						funds[i] = funds[i-2] - neighbors[0] + neighbors[i];
					}else{
						funds[i] = funds[i-1];
					}
				}else if(funds[i-2] + neighbors[i] > funds[i-1]){
					funds[i] = funds[i-2] + neighbors[i];
				}else{
					funds[i] = funds[i-1];
				}
			}
			return funds[funds.length-1];
		}
	}
}
