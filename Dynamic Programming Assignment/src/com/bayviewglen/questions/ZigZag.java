package com.bayviewglen.questions;

public class ZigZag {

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
		if(sequence.length == 0){
			return 0;
		}else if(sequence.length == 1){
			return 1;
		}else{
			int[] difference = new int[sequence.length];
			int maximum = 1;
			boolean maxLimit;
			for(int i = 0; i<sequence.length-1; i++){
				difference[i] = sequence[i+1] - sequence[i];
			}if(difference[0] >= 0){
				maxLimit = true;
			}else{
				maxLimit = false;
			}
			for(int k = 1; k<sequence.length; k++){
				boolean keepGoing = maxLimit;
				if(difference[k] > 0){
					keepGoing = true;
				}else if(difference[k] < 0){
					keepGoing = false;
				}if(keepGoing != maxLimit){
					maximum++;
					maxLimit = keepGoing;
				}
			}
			return maximum + 1;
		}
		
	}
}
