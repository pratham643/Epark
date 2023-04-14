package com.sunbeam.models;

import org.springframework.beans.BeanUtils;

import com.sunbeam.entities.Slot;

public class SlotDTO {
	private  int slotId;
	private String slotName;
	private String slotBookedStatus;
	private int slotRatePerHour;
	private int blockId;
	private String blockName;
	private String blockCapacity;
	
	public SlotDTO() {
	}
	
	public SlotDTO(int slotId, String slotName, String slotBookedStatus, int slotRatePerHour, int blockId,
			String blockName, String blockCapacity) {
		this.slotId = slotId;
		this.slotName = slotName;
		this.slotBookedStatus = slotBookedStatus;
		this.slotRatePerHour = slotRatePerHour;
		this.blockId = blockId;
		this.blockName = blockName;
		this.blockCapacity = blockCapacity;
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
	public String getSlotBookedStatus() {
		return slotBookedStatus;
	}
	public void setSlotBookedStatus(String slotBookedStatus) {
		this.slotBookedStatus = slotBookedStatus;
	}
	public int getSlotRatePerHour() {
		return slotRatePerHour;
	}
	public void setSlotRatePerHour(int slotRatePerHour) {
		this.slotRatePerHour = slotRatePerHour;
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

	
	@Override
	public String toString() {
		return "SlotDTO [slotId=" + slotId + ", slotName=" + slotName + ", slotBookedStatus=" + slotBookedStatus
				+ ", slotRatePerHour=" + slotRatePerHour + ", blockId=" + blockId + ", blockName=" + blockName
				+ ", blockCapacity=" + blockCapacity + "]";
	}

	public static SlotDTO fromEntity(Slot entity) {
		SlotDTO dto = new SlotDTO();
		BeanUtils.copyProperties(entity, dto);
		dto.setBlockId(entity.getBlock().getBlockId());
		dto.setBlockName(entity.getBlock().getBlockName());
		dto.setBlockCapacity(entity.getBlock().getBlockCapacity());
		return dto;
	}
	private void setBlockCapacity(int blockCapacity2) {
		
		
	}

	public static Slot toEntity(SlotDTO dto) {
		Slot entity = new Slot();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
	
	
}
