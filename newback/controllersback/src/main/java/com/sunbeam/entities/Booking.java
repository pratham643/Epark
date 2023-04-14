package com.sunbeam.entities;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name = "bookingDetails")
public class Booking {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;
	private String carNo;
	@Temporal(TemporalType.TIMESTAMP)
	private Date entryDateTime;
	@Temporal(TemporalType.TIMESTAMP)
	private Date exitDateTime;
	private String idProofType;
	private String idProofNumber;
	@ManyToOne
	@JoinColumn(name="id")
	private User user;
	@OneToOne
	@JoinColumn(name="slotId")
	private Slot slot;
	
	public Booking() {
		
	}

	public Booking(int bookingId, String carNo, Date entryDateTime, Date exitDateTime,
			String idProofType, String idProofNumber, User user, Slot slot) {
		super();
		this.bookingId = bookingId;
		this.carNo = carNo;
		this.entryDateTime = entryDateTime;
		this.exitDateTime = exitDateTime;
		this.idProofType = idProofType;
		this.idProofNumber = idProofNumber;
		this.user = user;
		this.slot = slot;
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
	@JsonBackReference
	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Slot getSlot() {
		return slot;
	}

	public void setSlot(Slot slot) {
		this.slot = slot;
	}

	@Override
	public String toString() {
		return "Booking [bookingId=" + bookingId + ", carNo=" + carNo + ", entryDateTime=" + entryDateTime
				+ ", exitDateTime=" + exitDateTime + ", idProofType=" + idProofType
				+ ", idProofNumber=" + idProofNumber + "]";
	}
}
