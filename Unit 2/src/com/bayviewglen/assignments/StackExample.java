package com.bayviewglen.assignments;

import java.util.Scanner;
import java.util.Stack;

public class StackExample {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Please enter an equation (seperate each value with a space): ");
		String equation = scanner.nextLine();

		String[] values = equation.split(" ");

		Stack<Integer> stack = new Stack<Integer>();

		for(String val: values){
			if(val.equals("+") || val.equals("*") || val.equals("/") || val.equals("-")){
				int number1 = stack.pop();
				int number2 = stack.pop();

				if(val.equals("*")){
					stack.push(number1*number2);
				}else if(val.equals("+")){
					stack.push(number1+number2);
				}else if(val.equals("/")){
					stack.push(number1/number2);
				}else if(val.equals("-")){
					stack.push(number1-number2);
				}
			}else{
				stack.push(new Integer(val));
			}
		}

		System.out.println("The solution is: " + stack.pop());
	}

}
