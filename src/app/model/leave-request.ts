export interface LeaveRequest {
    empUsername?: string;
    id?: string;
    startDate?: Date;
    endDate?: Date;
    halfDay?: boolean;
    reason?: string;
    status?: string;

}
