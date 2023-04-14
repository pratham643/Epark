package com.sunbeam.Daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entities.Payment;

public interface PaymentDao extends JpaRepository<Payment, Integer> {

}
