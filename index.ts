import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  /** CREATE MANAGER */
  //   const manager = await prisma.manager.create({
  //     data: {
  //       name: "Vish S",
  //       email: "vish.s@gmail.com",
  //     },
  //   });
  //   console.log(manager);
  /** CREATE EMPLOYEE */
  // const employee = await prisma.employee.create({
  //   data: {
  //     name: "Sidhant kadam",
  //     email: "sidhant@gmail.com",
  //     department: "HR",
  //     managerId: "934d2b0f-8e16-4fd6-a3ae-598b69f742f8",
  //   },
  // });
  // console.log(employee);
  /** READ */
  //   const employees = await prisma.employee.findMany({
  //     where: { managerId: "934d2b0f-8e16-4fd6-a3ae-598b69f742f8" },
  //   });
  //   console.log(employees);
  /** UPDATE */
  //   const updateUser = await prisma.employee.update({
  //     where: {
  //       email: "sidhant@gmail.com",
  //     },
  //     data: {
  //       name: "Sid kadam",
  //     },
  //   });
  //   console.log(updateUser);
  /** DELETE */
  //   const deleteUser = await prisma.employee.delete({
  //     where: {
  //       email: "sidhant@gmail.com",
  //     },
  //   });
  //   console.log(deleteUser);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
