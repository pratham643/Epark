package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "blockDetails")
public class Block {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int blockId;
	private String blockName;
	private int blockCapacity;
	@ManyToOne
	@JoinColumn(name="areaId")
	private ParkingArea area;
	
	public Block() {
		
	}

	public Block(int blockId, String blockName, int blockCapacity, ParkingArea area) {
		super();
		this.blockId = blockId;
		this.blockName = blockName;
		this.blockCapacity = blockCapacity;
		this.area = area;
	}

	public int getBlockId() {
		return blockId;
	}

	public void setBlockId(int blockId) {
		this.blockId = blockId;
	}

	public String getBlockName() {
		return blockName;
	}

	public void setBlockName(String blockName) {
		this.blockName = blockName;
	}

	public int getBlockCapacity() {
		return blockCapacity;
	}

	public void setBlockCapacity(int blockCapacity) {
		this.blockCapacity = blockCapacity;
	}

	public ParkingArea getArea() {
		return area;
	}

	public void setArea(ParkingArea area) {
		this.area = area;
	}

	@Override
	public String toString() {
		return "Block [blockId=" + blockId + ", blockName=" + blockName + ", blockCapacity=" + blockCapacity + "]";
	}

	
}
