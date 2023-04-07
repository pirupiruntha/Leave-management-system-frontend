export interface LeaveRequest {
    startDate: Date;
    endDate: Date;
    halfDay?: boolean;
    reason: string;
}
