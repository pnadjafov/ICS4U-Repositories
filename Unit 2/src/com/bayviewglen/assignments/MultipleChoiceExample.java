package com.bayviewglen.assignments;

public class MultipleChoiceExample {

	public static void main(String[] args) {
		char[][] solutions = {
				{'A', 'C', 'D', 'D', 'B', 'D', 'C', 'A', 'E', 'A'},
				{'C', 'D', 'A', 'E', 'C', 'C', 'C', 'B', 'A', 'A'},
				{'C', 'C', 'D', 'C', 'B', 'D', 'A', 'C', 'E', 'E'},
				{'A', 'A', 'C', 'E', 'A', 'D', 'C', 'B', 'D', 'A'},
				{'B', 'C', 'D', 'B', 'B', 'D', 'D', 'E', 'D', 'C'},
				{'A', 'C', 'C', 'A', 'C', 'A', 'E', 'B', 'E', 'A'},
				{'D', 'E', 'D', 'E', 'B', 'B', 'A', 'D', 'C', 'D'},
				{'A', 'C', 'D', 'C', 'E', 'D', 'C', 'B', 'E', 'A'},
		};
		char[] answers = {'A', 'B', 'A', 'C', 'D', 'E','B', 'C', 'D','A'};

		int[] marks = new int[10];
		
		grade(answers, solutions, marks);
		display(marks);
	}

	public static void grade(char[] answers, char[][] solutions, int[] marks){
		for (int i=0; i<solutions.length; ++i){
			for (int j=0; j<answers.length; ++j){
				if (solutions[i][j] == answers[j]){
					marks[i]++;
				}

			}
		}
	}

	public static void display(int[] marks){
		for (int i=0; i<marks.length; ++i){
			System.out.println("Student number" + (i+1) + " got " + marks[i] + " correct.");
		}


	}

}
