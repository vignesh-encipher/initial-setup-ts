"use client";

import {  useState } from "react";
import { connect } from "react-redux";
import type { ColumnsType } from "antd/es/table";
import { Button, Tag } from "antd";
import { TableComponent } from "@/components/table";
import { actions as dashboardActions } from "@/state/card";
import type { User, Users } from "@/models/admin/table";
import Card from "@/state/card/model";
import ReusableButton from "@/components/button";
import ReusbaleCard from "@/components/card";
import TableSkeleton from "@/components/skeleton /tableSkeleton";
import CardSkeleton from "@/components/skeleton /cardSkeleton";
import ReusableDrawer from "@/components/drawer";
import ReusableModal from "@/components/modal";

interface AdminDashboardPageProps {
  getUsers: () => Promise<unknown>;
  getUsersData: Users | null;
  getUsersDataLoad?: boolean;
}

const AdminDashboardPage = ({
  getUsers,
  getUsersData,
  getUsersDataLoad,
}: AdminDashboardPageProps) => {
  const [open, setOpen] = useState<boolean>(false);
   const [modalOpen, setModalOpen] = useState<boolean>(false);
  const columns: ColumnsType<User> = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "City",
      dataIndex: ["address", "city"],
      key: "city",
    },
    {
      title: "Status",
      key: "status",
      render: () => <Tag color="green">Active</Tag>,
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard Page</h1>
      <>
        <Button type="primary"  color="purple" variant="solid" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>

        <ReusableDrawer
          title="Patient Details"
          open={open}
          onClose={() => setOpen(false)}
          width={600}
        >
          <p>Your drawer content goes here...</p>
        </ReusableDrawer>
      </>
      <TableComponent
        columns={columns}
        dataSource={getUsersData ?? []}
        loading={getUsersDataLoad}
        tableProps={{
          size: "middle",
        }}
      />
        <>
      <Button color="pink" variant="solid" type="primary" onClick={() => setModalOpen(true)}>
        Open Modal
      </Button>

      <ReusableModal
        title="Delete Confirmation"
        open={modalOpen}
        onOk={() => {
          console.log("Confirmed");
          setModalOpen(false);
        }}
        onCancel={() => setModalOpen(false)}
      >
        <p>Are you sure you want to delete this item?</p>
      </ReusableModal>
    </>
      <ReusableButton name="ReusableButton" />
      <ReusbaleCard width="200px" height="400px" padding="10px">
        Reusable Card
      </ReusbaleCard>
      <TableSkeleton />
      <CardSkeleton height={400} count={5} />
    </div>
  );
};

const enhancer = connect(
  (state: { card: Card }) => ({
    getUsersData: state.card.getUsers.data,
    getUsersDataLoad: state.card.getUsersLoading,
  }),
  {
    getUsers: dashboardActions.getUsers,
  },
);

export default enhancer(AdminDashboardPage);
