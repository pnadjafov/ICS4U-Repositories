package com.bayviewglen.questions;

public class ZigZag {

	private static final int EMPTY = 0;
	private static final int MAX = 1;
	private static final int FIRST = 1;

	public static void main(String[] args) {
		
		int[] problem = { 374, 40, 854, 203, 203, 156, 362, 279, 812, 955, 
				600, 947, 978, 46, 100, 953, 670, 862, 568, 188, 
				67, 669, 810, 704, 52, 861, 49, 640, 370, 908, 
				477, 245, 413, 109, 659, 401, 483, 308, 609, 120, 
				249, 22, 176, 279, 23, 22, 617, 462, 459, 244 };
		System.out.println("The longest ZigZag Sequence is " + zigZag(problem) + ".");
		
		int [] problem2 = {70, 55, 13, 2, 99, 2, 80, 80, 80, 80, 100, 19, 7, 5, 5, 5, 1000, 32, 32 };
		System.out.println("The longest ZigZag Sequence is " + zigZag(problem2) + ".");
	
		int[] problem3 = { 1, 17, 5, 10, 13, 15, 10, 5, 16, 8 };
		System.out.println("The longest ZigZag Sequence is " + zigZag(problem3) + ".");

	}
	
	public static int zigZag(int[] sequence){
		if(sequence.length == EMPTY){ // If the sequence is empty, return 0.
			return EMPTY;
		}else if(sequence.length == FIRST){ // If the sequence has only one value, return the only value in the sequence.
			return FIRST;
		}else{
			int[] difference = new int[sequence.length]; // Stores all the calculated differences.
			int maximum = MAX;
			boolean maxLimit;
			for(int i = 0; i<sequence.length-1; i++){ // A for loop that stores all the differences into the difference array.
				difference[i] = sequence[i+1] - sequence[i];
			}if(difference[0] >= EMPTY){ // Checks if the first value in the difference array has a value greater than or equal to 0.
				maxLimit = true;
			}else{
				maxLimit = false;
			}
			for(int k = 1; k<sequence.length; k++){
				boolean keepGoing = maxLimit;
				if(difference[k] > 0){ // Checks if the difference is positive.
					keepGoing = true;
				}else if(difference[k] < 0){ // Checks if the difference is negative.
					keepGoing = false;
				}if(keepGoing != maxLimit){ // If these two booleans disagree, increase the value of the maximum integer, and keep going.
					maximum++;
					maxLimit = keepGoing;
				}
			}
			return maximum + 1;
		}
		
	}
}
