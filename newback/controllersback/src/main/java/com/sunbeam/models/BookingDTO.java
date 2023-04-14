package com.sunbeam.models;

import java.util.Date;

import org.springframework.beans.BeanUtils;

import com.sunbeam.entities.Booking;

public class BookingDTO {
	private int bookingId;
	private String carNo;
	private Date entryDateTime;
	private Date exitDateTime;
	private String idProofType;
	private String idProofNumber;
	public BookingDTO() {
		super();
	}
	public BookingDTO(int bookingId, String carNo, Date entryDateTime, Date exitDateTime, String idProofType,
			String idProofNumber) {
		this.bookingId = bookingId;
		this.carNo = carNo;
		this.entryDateTime = entryDateTime;
		this.exitDateTime = exitDateTime;
		this.idProofType = idProofType;
		this.idProofNumber = idProofNumber;
	}
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public String getCarNo() {
		return carNo;
	}
	public void setCarNo(String carNo) {
		this.carNo = carNo;
	}
	public Date getEntryDateTime() {
		return entryDateTime;
	}
	public void setEntryDateTime(Date entryDateTime) {
		this.entryDateTime = entryDateTime;
	}
	public Date getExitDateTime() {
		return exitDateTime;
	}
	public void setExitDateTime(Date exitDateTime) {
		this.exitDateTime = exitDateTime;
	}
	public String getIdProofType() {
		return idProofType;
	}
	public void setIdProofType(String idProofType) {
		this.idProofType = idProofType;
	}
	public String getIdProofNumber() {
		return idProofNumber;
	}
	public void setIdProofNumber(String idProofNumber) {
		this.idProofNumber = idProofNumber;
	}
	@Override
	public String toString() {
		return "BookingDTO [bookingId=" + bookingId + ", carNo=" + carNo + ", entryDateTime=" + entryDateTime
				+ ", exitDateTime=" + exitDateTime + ", idProofType=" + idProofType + ", idProofNumber=" + idProofNumber
				+ "]";
	}
	
	public static BookingDTO fromEntity(Booking entity) {
		BookingDTO dto = new BookingDTO();
		BeanUtils.copyProperties(entity, dto);
		return dto;
	}
	public static Booking toEntity(BookingDTO dto) {
		Booking entity = new Booking();
		BeanUtils.copyProperties(dto, entity);
		return entity;
	}
}
