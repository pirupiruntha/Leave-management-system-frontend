import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/model/employee';
import { StorageService } from 'src/app/services/storage.service';
import { Modal } from 'bootstrap';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

    allEmployeeData: Employee[] = [];

    fullName?: string;
    dob?: string;
    gender?: string;
    startDate?: string;
    education?: string;
    jobTitle?: string;
    salary?: string;
    roles?: string[] = [];

    constructor(private employeeService :EmployeeServiceService, private route: Router ){}

    ngOnInit() :void{
      this.getAllEmployees();
    }

    getAllEmployees(): void {
      console.log("CALLING METHOD TO ADMIN EMPLOYEE DETAILS BOARD");
      this.employeeService.getAllEmployees().subscribe((data)=>{
        console.log("role =", this.roles)
          this.allEmployeeData = data.filter(d=>d.roles?.includes('ROLE_USER'));
          if(this)
          console.log("data = ", data); 

      })
    }

    currentIndex: number =0;
    openModal(index: number) {
      this.currentIndex = index;
      const modal = document.getElementById('exampleModal');
      const modalInstance = new Modal(modal!);
      modalInstance.show();
}

editEmployeeDetails(employee: Employee) {
  this.route.navigate(['/addEmployee'], { queryParams: { employee: JSON.stringify(employee) } });
}
    deleteEmployeeDetails(){}

}
