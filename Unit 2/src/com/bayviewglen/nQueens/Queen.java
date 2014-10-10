package com.bayviewglen.nQueens;

public class Queen {
	
	int xCoor;
	int yCoor;
	boolean canMove;
	String name;
	
	public Queen(int x, int y){
		xCoor = x;
		yCoor = y;
		canMove = false; 
		name = "Q";
	}
	
	public int getXCoor(){
		return xCoor;
	}
	
	public int getYCoor(){
		return yCoor;
	}
	
	public void changeXCoor(int XCoor){
		this.xCoor = XCoor;
	}
	
	public void changeYCoor(int YCoor){
		this.yCoor = YCoor;
	}
	
	public String getName(){
		return name;
	}
}
