package com.sunbeam.models;

import org.springframework.beans.BeanUtils;
import org.springframework.web.multipart.MultipartFile;

import com.sunbeam.entities.ParkingArea;

public class ParkingAreaInDTO {
	private int areaId;
	private String areaName;
	private MultipartFile thumbnail;
	
	public  ParkingAreaInDTO() {
	
	}
	
	public ParkingAreaInDTO(int areaId, String areaName, MultipartFile thumbnail) {
		super();
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

	public MultipartFile getThumbnail() {
		return thumbnail;
	}

	public void setThumbnail(MultipartFile thumbnail) {
		this.thumbnail = thumbnail;
	}
	
	public static ParkingArea toEntity(ParkingAreaInDTO dto) {
		ParkingArea entity = new ParkingArea();
		BeanUtils.copyProperties(dto, entity, "thumbnail");
		return entity;
	}

	@Override
	public String toString() {
		return "ParkingAreaInDTO [areaId=" + areaId + ", areaName=" + areaName + ", thumbnail=" + thumbnail + "]";
	}
}
