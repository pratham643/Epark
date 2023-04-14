 package com.sunbeam.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "parkingArea")
public class ParkingArea {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int areaId;
	private String areaName;
	private String thumbnail;
	
	public ParkingArea() {
		super();
	}
	
	public ParkingArea(int areaId, String areaName, String thumbnail) {
		this.areaId = areaId;
		this.areaName = areaName;
		this.thumbnail = thumbnail;
	}

	public int getAreaId() {
		return areaId;
	}

	public void setAreaId(int areaId) {
		this.areaId = areaId;
	}

	public String getAreaName() {
		return areaName;
	}

	public void setAreaName(String areaName) {
		this.areaName = areaName;
	}

	public String getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(String thumbnail) {
		this.thumbnail = thumbnail;
	}

	@Override
	public String toString() {
		return "ParkingArea [areaId=" + areaId + ", areaName=" + areaName + ", thumbnail=" + thumbnail + "]";
	}
	
}
