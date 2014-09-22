package com.bayviewglen.assignments;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Arrays;
import java.util.Scanner;

public class ReverseArray {

	public static void main(String[] args) throws FileNotFoundException {

		String[] allWords = new String[1000];
		int wordCount = 0;

		Scanner input = new Scanner(new File("words.txt"));
		while (input.hasNext()) {
			String word = input.next();
			allWords[wordCount] = word;
			wordCount++;
		}

		String[] array2 = new String[wordCount];

		for(int i=0; i<wordCount; ++i){
			array2[i] = allWords[i];
		}


		Arrays.sort(array2);

		for(int i = wordCount-1; i>=0; --i){
			System.out.println(array2[i]);
		}

		System.out.println("*********");
		for(int i = array2.length/2; i<array2.length-1; ++i){
			array2[i] = array2[i+1];

		}
		String[] array3 = new String[wordCount-1];
		for(int i=0; i<wordCount-1; ++i){
			array3[i] = array2[i];
		}
		for(int i = array3.length-1; i>=0; --i){
			System.out.println(array3[i]);
		}

	}
}


