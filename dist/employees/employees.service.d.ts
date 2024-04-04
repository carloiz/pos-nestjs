import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeeModel } from 'src/common/model/employee.model';
import { Employee } from './entities/employee.entity';
export declare class EmployeesService {
    private readonly employeeModel;
    constructor(employeeModel: EmployeeModel);
    create(createEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    findAll(): Promise<Employee[]>;
    findOne(id: string): Promise<Employee>;
    update(id: string, updateEmployeeDto: CreateEmployeeDto): Promise<Employee>;
    remove(id: string): Promise<Employee>;
}
