package com.sunbeam.models;

import org.springframework.beans.BeanUtils;

import com.sunbeam.entities.Block;


public class BlockDTO {
	private int blockId;
	private String blockName;
	private String blockCapacity;

	private int areaId;
	private String areaName;
	private String thumbnail;

	
	public BlockDTO() {
	}
	
	public BlockDTO(int blockId, String blockName, String blockCapacity, int areaId, String areaName,
			String thumbnail) {
		this.blockId = blockId;
		this.blockName = blockName;
		this.blockCapacity = blockCapacity;
		this.areaId = areaId;
		this.areaName = areaName;
		this.thumbnail = thumbnail;
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
	public String getBlockCapacity() {
		return blockCapacity;
	}
	public void setBlockCapacity(String blockCapacity) {
		this.blockCapacity = blockCapacity;
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
		return "BlockDTO [blockId=" + blockId + ", blockName=" + blockName + ", blockCapacity=" + blockCapacity
				+ ", areaId=" + areaId + ", areaName=" + areaName + ", thumbnail=" + thumbnail + "]";
	}

	public static BlockDTO fromEntity(Block entity) {
		BlockDTO dto = new BlockDTO();
		BeanUtils.copyProperties(entity, dto);
		dto.setAreaId(entity.getArea().getAreaId());
		dto.setAreaName(entity.getArea().getAreaName());
		dto.setThumbnail(entity.getArea().getThumbnail());
		
		return dto;
	}
	public static Block toEntity(BlockDTO dto) {
		Block entity = new Block();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
	
}
