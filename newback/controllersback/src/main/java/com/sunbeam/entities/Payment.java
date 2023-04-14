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

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int paymentId;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd-mm-yyyy")
	private Date payDate;
	private double amount;
	private String paymentMode;
	private String paymentStatus;
	private String carParkedStatus;
	@OneToOne
	@JoinColumn(name="bookingId")
	private Booking booking;
	@ManyToOne
	@JoinColumn(name="revenueId")
	private Revenue revenue;
	
	public Payment() {
	}
	
	public Payment(int paymentId, Date payDate, double amount, String paymentMode, String paymentStatus,
			String carParkedStatus, Booking booking, Revenue revenue) {
		super();
		this.paymentId = paymentId;
		this.payDate = payDate;
		this.amount = amount;
		this.paymentMode = paymentMode;
		this.paymentStatus = paymentStatus;
		this.carParkedStatus = carParkedStatus;
		this.booking = booking;
		this.revenue = revenue;
	}

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public Date getPayDate() {
		return payDate;
	}

	public void setPayDate(Date payDate) {
		this.payDate = payDate;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getPaymentMode() {
		return paymentMode;
	}

	public void setPaymentMode(String paymentMode) {
		this.paymentMode = paymentMode;
	}
	
	public String getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	
	public String getCarParkedStatus() {
		return carParkedStatus;
	}

	public void setCarParkedStatus(String carParkedStatus) {
		this.carParkedStatus = carParkedStatus;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", payDate=" + payDate + ", amount=" + amount + ", paymentMode="
				+ paymentMode + ", paymentStatus=" + paymentStatus + ", carParkedStatus=" + carParkedStatus + "]";
	}
	
}
