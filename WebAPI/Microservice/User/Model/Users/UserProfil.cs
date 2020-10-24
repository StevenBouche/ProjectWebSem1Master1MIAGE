using System;

namespace User.Model.Users
{
    public enum UserRole
    {
        ADMIN, USER
    }

    public class UserProfil
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthdayDate { get; set; }
        public UserRole Role { get; set; }
    }

}
