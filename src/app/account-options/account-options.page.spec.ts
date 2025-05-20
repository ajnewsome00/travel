import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccountOptionsPage } from './account-options.page';

describe('AccountOptionsPage', () => {
  let component: AccountOptionsPage;
  let fixture: ComponentFixture<AccountOptionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
