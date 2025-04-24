class DateUtils {
    static formatDate(date: Date) {
        return date.toLocaleDateString();
    }
    static formatDateWithTime(date: Date) {
        return date.toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
        });
    }
  
    
}

export default DateUtils;