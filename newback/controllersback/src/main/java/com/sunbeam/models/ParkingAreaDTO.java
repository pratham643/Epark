package com.sunbeam.models;

public class ParkingAreaDTO {
	private int areaId;
	private String areaName;
	private String thumbnail;
	
	public ParkingAreaDTO() {

	}
	
	public ParkingAreaDTO(int areaId, String areaName, String thumbnail) {
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

