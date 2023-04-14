package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "slotDetails")
public class Slot {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private  int slotId;
	private String slotName;
	private String slotBookedStatus;
	private int slotRatePerHour;
	@ManyToOne
	@JoinColumn(name="blockId")
	private Block block;
	
	public Slot() {
		super();
	}

	public Slot(int slotId, String slotName, String slotBookedStatus, int slotRatePerHour, Block block) {
		super();
		this.slotId = slotId;
		this.slotName = slotName;
		this.slotBookedStatus = slotBookedStatus;
		this.slotRatePerHour = slotRatePerHour;
		this.block = block;
	}

	public int getSlotId() {
		return slotId;
	}


	public void setSlotId(int slotId) {
		this.slotId = slotId;
	}


	public String getSlotName() {
		return slotName;
	}


	public void setSlotName(String slotName) {
		this.slotName = slotName;
	}


	public int getSlotRatePerHour() {
		return slotRatePerHour;
	}


	public void setSlotRatePerHour(int slotRatePerHour) {
		this.slotRatePerHour = slotRatePerHour;
	}

	public String getSlotBookedStatus() {
		return slotBookedStatus;
	}

	public void setSlotBookedStatus(String slotBookedStatus) {
		this.slotBookedStatus = slotBookedStatus;
	}

	public Block getBlock() {
		return block;
	}


	public void setBlock(Block block) {
		this.block = block;
	}

	@Override
	public String toString() {
		return "Slot [slotId=" + slotId + ", slotName=" + slotName + ", slotBookedStatus=" + slotBookedStatus + ", slotRatePerHour="
				+ slotRatePerHour + "]";
	}



}
