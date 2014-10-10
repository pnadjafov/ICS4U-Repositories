package com.bayviewglen.nQueens;

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Stack;

public class NQueens {

	public static void main(String[] args) {
		int n = 0;
		Scanner scanner = new Scanner(System.in);
		Stack<Queen> stack = new Stack<Queen>();

		System.out.println("Hello, please enter a value for N (not odd):");
		n = scanner.nextInt();

		String[][] board = new String[n][n];

		for(int i = 0; i<n; i++){
			for(int k = 0; k<n; k++){
				board[k][i] = "X";
			}
		}

		board = solveQueens(board, n, stack);

		for(int i = 0; i< n; i++){
			System.out.println();
			for(int k = 0; k<n; k++){
				System.out.print("[" + board[k][i] + "]");
			}
		}
	}

	public static String[][] solveQueens(String[][] board, int n, Stack<Queen> queens){
		boolean conflict = false;
		for(int i = 0; i<n; i++){
			for(int k = 0; k<n; k++){
				Queen temp = new Queen(k,i);
				if(checkColumn(board, n, temp) && checkRow(board, n, temp) && checkDiagonal(board, n, temp, queens)){
					board[i][k] = "Q";
					// temp.changeXCoor(k);
					// temp.changeYCoor(i);
					queens.push(temp);
					conflict = false;
					break;
				}else if(!checkColumn(board, n, temp) || !checkRow(board, n, temp) || !checkDiagonal(board, n, temp, queens)){
					// board[i][k] = "X";
					if(k + 1 == n){	// cannot go any further I need to backtrack
						// board[temp.getYCoor()][temp.getXCoor()] = "Q";
						// queens.push(temp);
						i = i - 2;
						Queen pastQueen = queens.pop();
						Queen temp2 = queens.pop();
						for(int j = temp.getXCoor(); j<n; j++){
							if(checkColumn(board, n, temp) && checkRow(board, n, temp) && checkDiagonal(board, n, temp, queens)){
								board[i][j] = "Q";
								temp2.changeXCoor(j);
								temp2.changeYCoor(i);
								queens.push(temp2);
								conflict = false;
								break;
							}else if(!checkColumn(board, n, temp) || !checkRow(board, n, temp) || !checkDiagonal(board, n, temp, queens)){
								board[i][j] = "X";
								board[pastQueen.getYCoor()][pastQueen.getXCoor()] = "X";
							}

						}
					}
				}
			}
		}
		return board;
	}

	public static boolean checkColumn(String[][] board, int n, Queen q){
		int counter = 0;
		for(int i = 0; i<n; i++){
			if(board[i][q.getXCoor()] == "X"){
				counter++;
			}
		}
		if(counter == n){
			return true;
		}else{
			return false;
		}
	}

	public static boolean checkRow(String[][] board, int n, Queen q){
		int counter = 0;
		for(int i = 0; i<n; i++){
			if(board[i][q.getYCoor()]=="X"){
				counter++;
			}
		}
		if(counter == n){
			return true;
		}else{
			return false;
		}
	}

	public static boolean checkDiagonal(String[][] board, int n, Queen q, Stack<Queen> queens){
		Stack<Queen> tempStack = (Stack) queens.clone();
		ArrayList<Queen> queensList = new ArrayList<Queen>();
		if(queens.size() > 0){
			for(int i = 0; i<queens.size(); i++){
				queensList.add(tempStack.pop());
			}
			for(Queen queen: queensList){
				if(Math.abs(q.getXCoor() - queen.getXCoor()) == Math.abs(q.getYCoor() - queen.getYCoor())){
					return false;
				}
			}
		}
		return true;
	}

}