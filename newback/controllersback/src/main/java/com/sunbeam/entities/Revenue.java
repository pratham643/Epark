package com.sunbeam.entities;

import java.util.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "revenue")
public class Revenue {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int revenueId;
	@Temporal(TemporalType.DATE)
	@DateTimeFormat(pattern = "dd-mm-yyyy")
	private Date date;
	private double totalRevenue;
	@OneToMany(mappedBy = "revenue", cascade = CascadeType.ALL)
	private List<Payment> paymentList;
	
	public Revenue() {
	
	}

	public Revenue(int revenueId, Date date, double totalRevenue, List<Payment> paymentList) {
		super();
		this.revenueId = revenueId;
		this.date = date;
		this.totalRevenue = totalRevenue;
		this.paymentList = paymentList;
	}

	public int getRevenueId() {
		return revenueId;
	}
	
	public void setRevenueId(int revenueId) {
		this.revenueId = revenueId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public double getTotalRevenue() {
		return totalRevenue;
	}

	public void setTotalRevenue(double totalRevenue) {
		this.totalRevenue = totalRevenue;
	}

	public List<Payment> getPaymentList() {
		return paymentList;
	}

	public void setPaymentList(List<Payment> paymentList) {
		this.paymentList = paymentList;
	}

	@Override
	public String toString() {
		return "Revenue [revenueId=" + revenueId + ", date=" + date + ", totalRevenue=" + totalRevenue + "]";
	}
	
}
