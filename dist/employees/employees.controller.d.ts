import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
export declare class EmployeesController {
    private readonly employeesService;
    constructor(employeesService: EmployeesService);
    create(createEmployeeDto: CreateEmployeeDto): Promise<import("src/employees/entities/employee.entity").Employee>;
    findAll(): Promise<import("src/employees/entities/employee.entity").Employee[]>;
    findOne(id: string): Promise<import("src/employees/entities/employee.entity").Employee>;
    update(id: string, updateEmployeeDto: UpdateEmployeeDto): Promise<import("src/employees/entities/employee.entity").Employee>;
    remove(id: string): Promise<import("src/employees/entities/employee.entity").Employee>;
}
