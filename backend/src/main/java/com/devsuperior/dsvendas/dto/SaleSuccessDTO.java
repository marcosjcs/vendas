package com.devsuperior.dsvendas.dto;

import com.devsuperior.dsvendas.entities.Seller;

public class SaleSuccessDTO {
  private String sellerName;
  private Long visited;
  private Long deals;

  public SaleSuccessDTO() {
  }

  public SaleSuccessDTO(Seller seller, Long visited, Long deals) {
    sellerName = seller.getName();
    this.visited = visited;
    this.deals = deals;
  }

  public String getSellerName() {
    return this.sellerName;
  }

  public void setSellerName(String sellerName) {
    this.sellerName = sellerName;
  }

  public Long getVisited() {
    return this.visited;
  }

  public void setVisited(Long visited) {
    this.visited = visited;
  }

  public Long getDeals() {
    return this.deals;
  }

  public void setDeals(Long deals) {
    this.deals = deals;
  }

}
