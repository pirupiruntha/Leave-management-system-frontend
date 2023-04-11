import { Component } from '@angular/core';
import { EmployeeServiceService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/model/employee';
import { Modal } from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  allEmployeeData: Employee[] = [];
  username: string ='';
  currentIndex: number =0;

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
    this.employeeService.getAllEmployees().subscribe((data)=>{
      this.allEmployeeData = data.filter(d=>d.roles?.includes('ROLE_USER'));
    })
    
  }

  
  openModal(index: number) {
    this.currentIndex = index;
    const modal = document.getElementById('exampleModal');
    const modalInstance = new Modal(modal!);
    modalInstance.show();
  }

  editEmployeeDetails(employee: Employee) {
    this.route.navigate(['/addEmployee'], { queryParams: { employee: JSON.stringify(employee) } });
  }

  deleteEmployeeDetails(username: string){
    this.employeeService.deleteEmployeeByUsername(username).subscribe(()=> {
      alert('Employee deleted successfully!');
      window.location.reload();
      
      },
  (error) => {
    console.error(error);  
    })
  }
   
}
