# IndexController.cs
```csharp 
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Task_API.Models;

namespace Task_API.Controllers
{
    public class IndexController : ApiController
    {
        [HttpPost]
        [Route("AddEmployeeDetails")]
        public string AddEmployeeDetails([FromBody] EmployeeModel employeeModel)
        {
            return employeeModel.AddEmployeeDetails();
        }

        [HttpPost]
        [Route("GetEmployeeList")]
        public List<EmployeeModel> GetEmployeeList([FromBody] EmployeeModel employeeModel)
        {
            return employeeModel.GetEmployeeList();
        }

        [HttpPost]
        [Route("GetEmployeeDetails")]
        public EmployeeModel GetEmployeeDetails([FromBody] EmployeeModel employeeModel)
        {
            return employeeModel.GetEmployeeDetails();
        }

        [HttpPost]
        [Route("DeleteEmployee")]
        public string DeleteEmployee([FromBody] EmployeeModel employeeModel)
        {
            return employeeModel.DeleteEmployee();
        }

        [HttpPost]
        [Route("EditEmployeeDetails")]
        public string EditEmployeeDetails([FromBody] EmployeeModel employeeModel)
        {
            return employeeModel.EditEmployeeDetails();
        }

        [HttpPost]
        [Route("GetDesignation")]
        public List<EmployeeModel> GetDesignation()
        {
            EmployeeModel EmployeeModel = new EmployeeModel();
            return EmployeeModel.GetDesignation();
        }


        [HttpPost]
        [Route("AddTasks")]
        public List<TaskModel> AddTasks([FromBody] TaskModel taskModel)
        {
            return taskModel.AddTasks();
        }

        [HttpPost]
        [Route("DeleteTasks")]
        public string DeleteTasks([FromBody] TaskModel taskModel)
        {
            return taskModel.DeleteTasks();
        }

        [HttpPost]
        [Route("GetTaskDetails")]
        public TaskModel GetTaskDetails([FromBody] TaskModel taskModel)
        {
            return taskModel.GetTaskDetails();
        }

        [HttpPost]
        [Route("GetTasksList")]
        public List<TaskModel> GetTasksList([FromBody] TaskModel taskModel)
        {
            return taskModel.GetTasksList();
        }

        [HttpPost]
        [Route("GetTaskSubjects")]
        public TaskModel GetTaskSubjects([FromBody] TaskModel taskModel)
        {
            return taskModel.GetTaskSubjects();
        }


        [HttpPost]
        [Route("GetTaskType")]
        public TaskModel GetTaskType([FromBody] TaskModel taskModel)
        {
            return taskModel.GetTaskType();
        }

        [HttpPost]
        [Route("EditTaskDetails")]
        public TaskModel EditTaskDetails([FromBody] TaskModel taskModel)
        {
            return taskModel.EditTaskDetails();
        }

    }
}
```

# EmployeeModel.cs
```csharp
/* EmployeeModel.cs*/
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Threading.Tasks;
using System.Web.Helpers;

namespace PreSchoolAPI.Models
{
    public class EmployeeModel
    {
        public int ID { get; set; }
        public string EmployeeName { get; set; }

        public string BirthDate { get; set; }

        public int DesignationId { get; set; }

        public string DesignationName { get; set; }

        public int Gender { get; set; }

        public string EmailId { get; set; }

        public string PhoneNo { get; set; }

        public string AddEmployeeDetails()
        {
            string AddEmployeeDetailsReturn = "";
            string connetionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection oConnection = new SqlConnection(connetionString))
            {
                oConnection.Open();
                using (SqlCommand oCommand = oConnection.CreateCommand())
                {
                    oCommand.CommandType = CommandType.StoredProcedure;
                    oCommand.CommandText = "USP_AddEmployeeDetails";
                    oCommand.Parameters.Add(new SqlParameter("@EmployeeName", SqlDbType.VarChar)).Value = EmployeeName;
                    oCommand.Parameters.Add(new SqlParameter("@BirthDate", SqlDbType.Date))
                    .Value = BirthDate;
                    oCommand.Parameters.Add(new SqlParameter("@DesignationId", SqlDbType.Int))
                    .Value = DesignationId;
                    oCommand.Parameters.Add(new SqlParameter("@Gender", SqlDbType.Int))
                    .Value = Gender;
                    oCommand.Parameters.Add(new SqlParameter("@EmailId", SqlDbType.VarChar))
                    .Value = EmailId;
                    oCommand.Parameters.Add(new SqlParameter("@PhoneNo", SqlDbType.VarChar))
                    .Value = PhoneNo;
                    try
                    {
                        oCommand.ExecuteNonQuery();
                        AddEmployeeDetailsReturn = "Employee Added Successfully";
                    }
                    catch (Exception e)
                    {
                        oConnection.Close();
                        AddEmployeeDetailsReturn = "Failed to Add Employee";
                    }
                }
            }
            return AddEmployeeDetailsReturn;
        }

        public List<EmployeeModel> GetEmployeeList()
        {
            List<EmployeeModel> EmployeeModel = new List<EmployeeModel>();
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection oConnection = new SqlConnection(connectionString))
            {
                oConnection.Open();
                using (SqlCommand oCommand = oConnection.CreateCommand())
                {
                    oCommand.CommandType = CommandType.StoredProcedure;
                    oCommand.CommandText = "USP_GetEmployeeList";

                    try
                    {

                        SqlDataReader dr = oCommand.ExecuteReader();
                        while (dr.Read())
                        {
                            EmployeeModel.Add(new EmployeeModel
                            {

                                EmployeeName = dr["EmployeeName"].ToString(),
                                BirthDate = dr["BirthDate"].ToString(),
                                DesignationName = dr["DesignationName"].ToString(),
                                EmailId = dr["EmailId"].ToString(),
                                PhoneNo = dr["PhoneNo"].ToString(),
                            }
                            );
                        }
                    }
                    catch (Exception e)
                    {
                        oConnection.Close();
                        // Action after the exception is caught
                    }
                }
                return EmployeeModel;

            }

        }

        public EmployeeModel GetEmployeeDetails()
        {
            EmployeeModel EmployeeDetailModel = new EmployeeModel();

            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection Connection = new SqlConnection(connectionString))
            {
                Connection.Open();
                using (SqlCommand Command = Connection.CreateCommand())
                {
                    Command.CommandType = CommandType.StoredProcedure;
                    Command.CommandText = "USP_GetEmployeeDetails";

                     Command.Parameters.Add(new SqlParameter("@ID", SqlDbType.Int))
                        .Value = ID; 


                    try
                    {
                        SqlDataReader dr = Command.ExecuteReader();
                        while (dr.Read())
                        {
                            EmployeeDetailModel =
                                new EmployeeModel
                                {

                                    EmployeeName = dr["EmployeeName"].ToString(),
                                    BirthDate = dr["BirthDate"].ToString(),
                                    DesignationName = dr["DesignationName"].ToString(),
                                    Gender =Convert.ToInt32(dr["Gender"].ToString()),
                                    EmailId = dr["EmailId"].ToString(),
                                    PhoneNo = dr["PhoneNo"].ToString(),
                                };
                        }
                    }
                    catch (Exception e)
                    {
                        Connection.Close();
                        // Action after the exception is caught.
                    }
                }
            }

            return EmployeeDetailModel;
        }

        public string DeleteEmployee()
        {
            string DeleteEmployeeReturn = "";
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection oConnection = new SqlConnection(connectionString))
            {
                try
                {
                    oConnection.Open();
                    using (SqlCommand oCommand = oConnection.CreateCommand())
                    {
                        oCommand.CommandType = CommandType.StoredProcedure;
                        oCommand.CommandText = "USP_DeleteEmployee";

                        SqlParameter param;
                        param = oCommand.Parameters.Add("@ID", SqlDbType.Int);
                        param.Value = ID;

                        oCommand.ExecuteNonQuery();

                        DeleteEmployeeReturn = "Employee Details Deleted Successfully";
                    }
                }
                catch (Exception e)
                {
                    oConnection.Close();
                    DeleteEmployeeReturn = "Failed to Delete Employee Details";
                }

                return DeleteEmployeeReturn;
            }
        }


        public string EditEmployeeDetails()
        {
            string EditDetails = "";
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection Connection = new SqlConnection(connectionString))
            {
                Connection.Open();
                using (SqlCommand Command = Connection.CreateCommand())
                {
                    Command.CommandType = CommandType.StoredProcedure;
                    Command.CommandText = "USP_UpdateEmployeeDetails";

                    SqlParameter param;
                    param = Command.Parameters.Add("ID", SqlDbType.Int);
                    param.Value = ID;
                    param = Command.Parameters.Add("EmployeeName", SqlDbType.VarChar);
                    param.Value = EmployeeName;
                    param = Command.Parameters.Add("BirthDate", SqlDbType.Date);
                    param.Value = BirthDate;
                    param = Command.Parameters.Add("EmailId", SqlDbType.VarChar);
                    param.Value = EmailId;
                    param = Command.Parameters.Add("PhoneNo", SqlDbType.VarChar);
                    param.Value = PhoneNo;

                    try
                    {
                        Command.ExecuteNonQuery();
                        EditDetails = "Employee Details Edited Successfully";
                    }
                    catch (Exception e)
                    {
                        Connection.Close();
                        EditDetails = "Failed to Edit Employee Details";
                    }
                }
            }
            return EditDetails;
        }

        public List<EmployeeModel> GetDesignation()
        {
            List<EmployeeModel> EmployeeModel = new List<EmployeeModel>();

            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection oConnection = new SqlConnection(connectionString))
            {
                oConnection.Open();
                using (SqlCommand oCommand = oConnection.CreateCommand())
                {
                    oCommand.CommandType = CommandType.StoredProcedure;
                    oCommand.CommandText = "USP_GetDesignation";

                    try
                    {
                        SqlDataReader dr = oCommand.ExecuteReader();
                        while (dr.Read())
                        {
                            EmployeeModel.Add(new EmployeeModel
                            {
                                ID = Convert.ToInt32(dr["ID"].ToString()),
                                DesignationName = dr["DesignationName"].ToString()
                            });
                        }
                    }
                    catch (Exception e)
                    {
                        oConnection.Close();
                        // Action after the exception is caught
                    }
                }
            }

            return EmployeeModel;
        }

    }
}
```
# TaskModel.cs
```csharp
using Task_API.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace Task_API.Models
{
    public class TaskModel
    {
        public int ID { get; set; }

        public int TaskSubjectId{ get; set; }

        public string TaskName { get; set; }

        public string Tasktime { get; set; }

        public int TaskTypeId{ get; set; }

        public string IsReminder { get; set; }

        public string TaskSubjectName { get; set; }

        public string TaskTypeName { get; set; }

        public List<TaskModel> AddTasks()
        {

            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection oConnection = new SqlConnection(connectionString))
            {
                oConnection.Open();
                using (SqlCommand oCommand = oConnection.CreateCommand())
                {
                    oCommand.CommandType = CommandType.StoredProcedure;
                    oCommand.CommandText = "USP_AddTasks";
                    oCommand.Parameters.Add(new SqlParameter("@TaskSubjectId", SqlDbType.Int))
                    .Value = TaskSubjectId;
                    oCommand.Parameters.Add(new SqlParameter("@TaskName", SqlDbType.VarChar))
                    .Value = TaskName;
                    oCommand.Parameters.Add(new SqlParameter("@Tasktime", SqlDbType.DateTime))
                    .Value = Tasktime;
                    oCommand.Parameters.Add(new SqlParameter("@TaskTypeId", SqlDbType.Int))
                    .Value = TaskTypeId;
                    oCommand.Parameters.Add(new SqlParameter("@IsReminder", SqlDbType.Bit))
                    .Value = IsReminder;
 
                    try
                    {
                        oCommand.ExecuteNonQuery();

                    }
                    catch (Exception e)
                    {
                        oConnection.Close();

                    }
                }
            }
            List<TaskModel> tasks = GetTasksList();
            return tasks;
        }



        /*  Deleting tasks */  

        public string DeleteTasks()
        {
            string DeleteTaskReturn = "";
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection oConnection = new SqlConnection(connectionString))
            {
                try
                {
                    oConnection.Open();
                    using (SqlCommand oCommand = oConnection.CreateCommand())
                    {
                        oCommand.CommandType = CommandType.StoredProcedure;
                        oCommand.CommandText = "USP_DeleteTasks";

                        SqlParameter param;
                        param = oCommand.Parameters.Add("@ID", SqlDbType.Int);
                        param.Value = ID;

                        oCommand.ExecuteNonQuery();

                        DeleteTaskReturn = "Task Details Deleted Successfully";
                    }
                }
                catch (Exception e)
                {
                    oConnection.Close();
                    DeleteTaskReturn = "Failed to Delete Task Details";
                }

                return DeleteTaskReturn;
            }
        }



        /*  Displaying Task Details According to ID */
        public TaskModel GetTaskDetails()
        {
            TaskModel TaskDetailsModel = new TaskModel();

            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection Connection = new SqlConnection(connectionString))
            {
                Connection.Open();
                using (SqlCommand Command = Connection.CreateCommand())
                {
                    Command.CommandType = CommandType.StoredProcedure;
                    Command.CommandText = "Usp_GetTasks";

                    Command.Parameters.Add(new SqlParameter("@ID", SqlDbType.Int))
                       .Value = ID;


                    try
                    {
                        SqlDataReader dr = Command.ExecuteReader();
                        while (dr.Read())
                        {
                            TaskDetailsModel =
                                new TaskModel
                                {

                                    TaskSubjectName = dr["TaskSubjectName"].ToString(),
                                    TaskName = dr["TaskName"].ToString(),
                                    Tasktime = dr["Tasktime"].ToString(),
                                    TaskTypeName = dr["TaskTypeName"].ToString()
                                };
                        }
                    }
                    catch (Exception e)
                    {
                        Connection.Close();
                        // Action after the exception is caught.
                    }
                }
            }

            return TaskDetailsModel;
        }




        /* Get Tasks List */
        public List<TaskModel> GetTasksList()
        {
            List<TaskModel> TaskModel = new List<TaskModel>();
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection oConnection = new SqlConnection(connectionString))
            {
                oConnection.Open();
                using (SqlCommand oCommand = oConnection.CreateCommand())
                {
                    oCommand.CommandType = CommandType.StoredProcedure;
                    oCommand.CommandText = "Usp_GetTasksList";

                    try
                    {

                        SqlDataReader dr = oCommand.ExecuteReader();
                        while (dr.Read())
                        {
                            TaskModel.Add(new TaskModel
                            {

                                TaskSubjectName = dr["TaskSubjectName"].ToString(),
                                TaskName = dr["TaskName"].ToString(),
                                Tasktime = dr["Tasktime"].ToString(),
                                TaskTypeName = dr["TaskTypeName"].ToString()
                            }
                            );
                        }
                    }
                    catch (Exception e)
                    {
                        oConnection.Close();
                        // Action after the exception is caught
                    }
                }
                return TaskModel;

            }

        }


        /*  Displaying Task Subjects According to ID */
        public TaskModel GetTaskSubjects()
        {
            TaskModel TaskSubjectsModel = new TaskModel();

            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection Connection = new SqlConnection(connectionString))
            {
                Connection.Open();
                using (SqlCommand Command = Connection.CreateCommand())
                {
                    Command.CommandType = CommandType.StoredProcedure;
                    Command.CommandText = "Usp_GetTaskSubjects";

                    Command.Parameters.Add(new SqlParameter("@ID", SqlDbType.Int))
                       .Value = ID;


                    try
                    {
                        SqlDataReader dr = Command.ExecuteReader();
                        while (dr.Read())
                        {
                            TaskSubjectsModel =
                                new TaskModel
                                {

                                    ID = Convert.ToInt32(dr["ID"].ToString()),
                                    TaskSubjectName = dr["TaskSubjectName"].ToString(),
                                };
                        }
                    }
                    catch (Exception e)
                    {
                        Connection.Close();
                        // Action after the exception is caught.
                    }
                }
            }

            return TaskSubjectsModel;
        }


        /*  Displaying Task Type According to ID */
        public TaskModel GetTaskType()
        {
            TaskModel TaskTypeModel = new TaskModel();

            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection Connection = new SqlConnection(connectionString))
            {
                Connection.Open();
                using (SqlCommand Command = Connection.CreateCommand())
                {
                    Command.CommandType = CommandType.StoredProcedure;
                    Command.CommandText = "Usp_GetTaskType";

                    Command.Parameters.Add(new SqlParameter("@ID", SqlDbType.Int))
                       .Value = ID;


                    try
                    {
                        SqlDataReader dr = Command.ExecuteReader();
                        while (dr.Read())
                        {
                            TaskTypeModel =
                                new TaskModel
                                {

                                    ID = Convert.ToInt32(dr["ID"].ToString()),
                                    TaskTypeName = dr["TaskTypeName"].ToString(),
                                };
                        }
                    }
                    catch (Exception e)
                    {
                        Connection.Close();
                        // Action after the exception is caught.
                    }
                }
            }

            return TaskTypeModel;
        }

        /* Update / Edit Task Details */
        public TaskModel EditTaskDetails()
        {
   
            string connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            using (SqlConnection Connection = new SqlConnection(connectionString))
            {
                Connection.Open();
                using (SqlCommand Command = Connection.CreateCommand())
                {
                    Command.CommandType = CommandType.StoredProcedure;
                    Command.CommandText = "Usp_UpdateTasks";

                    SqlParameter param;
                    param = Command.Parameters.Add("ID", SqlDbType.Int);
                    param.Value = ID;
                    param = Command.Parameters.Add("TaskSubjectId", SqlDbType.Int);
                    param.Value = TaskSubjectId;
                    param = Command.Parameters.Add("TaskName", SqlDbType.VarChar);
                    param.Value = TaskName;
                    param = Command.Parameters.Add("Tasktime", SqlDbType.DateTime);
                    param.Value = Tasktime;
                    param = Command.Parameters.Add("TaskTypeId", SqlDbType.Int);
                    param.Value = TaskTypeId;

                    try
                    {
                        Command.ExecuteNonQuery();

                    }
                    catch (Exception e)
                    {
                        Connection.Close();

                    }
                }
            }
            TaskModel tasks = GetTaskDetails();
            return tasks;
        }



    }


}


```
/ / C O D E  _ R E D
