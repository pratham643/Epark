package com.sunbeam.models;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import com.sunbeam.entities.Role;

public class Credentials {
	@NotBlank(message = "*")
	@Email(message = "invalid email")
	private String email; // must be same as req param
	@NotBlank(message = "*")
	@Size(min = 4, max = 12, message = "min 4 and max 12 chars password required")
	private String password; // must be same as req param
	@NotBlank(message = "*")
	@Enumerated(EnumType.STRING)
	private Role role;
	
	public Credentials() {
		
	}

	public Credentials(@NotBlank(message = "*") @Email(message = "invalid email") String email,
			@NotBlank(message = "*") @Size(min = 4, max = 12, message = "min 4 and max 12 chars password required") String password,
			@NotBlank(message = "*") Role role) {
		super();
		this.email = email;
		this.password = password;
		this.role = role;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	@Override
	public String toString() {
		return "Credentials [email=" + email + ", password=" + password + ", role=" + role + "]";
	}

	
}
