import { ref } from "vue";

export const useSideMenuItems = () => {
  const sideMenuItems = ref([
    {
      id: 1,
      title: "會計相關-應收帳款明細表",
      parent: "會計相關",
      roleList: ["售服主管", "服務廠主管", "財務"],
    },
    {
      id: 2,
      title: "會計相關-發票明細表",
      parent: "會計相關",
      roleList: ["售服主管", "服務廠主管", "財務"],
    },
    {
      id: 3,
      title: "經營相關-回廠率查詢",
      parent: "經營相關",
      roleList: ["售服主管", "服務廠主管"],
    },
    {
      id: 4,
      title: "零件相關-出貨成本查詢",
      parent: "零件相關",
      roleList: ["售服主管", "服務廠主管", "零件主管", "零件人員"],
    },
    {
      id: 5,
      title: "零件相關-零件進貨退回明細表",
      parent: "零件相關",
      roleList: ["售服主管", "服務廠主管", "零件主管", "零件人員"],
    },
    {
      id: 6,
      title: "零件相關-零件銷售退回明細表",
      parent: "零件相關",
      roleList: ["售服主管", "服務廠主管", "零件主管", "零件人員"],
    },
    {
      id: 7,
      title: "零件相關-零件出貨明細表",
      parent: "零件相關",
      roleList: ["售服主管", "服務廠主管", "零件主管", "零件人員"],
    },
    {
      id: 8,
      title: "零件相關-月結存貨明細表",
      parent: "零件相關",
      roleList: ["售服主管", "服務廠主管", "零件主管", "零件人員"],
    },
    {
      id: 9,
      title: "零件相關-零件銷售明細表",
      parent: "零件相關",
      roleList: ["售服主管", "服務廠主管", "零件主管", "零件人員"],
    },
    {
      id: 10,
      title: "零件相關-零件收益及毛利分析",
      parent: "零件相關",
      roleList: ["售服主管", "服務廠主管", "零件主管", "零件人員"],
    },
    {
      id: 11,
      title: "維修相關-工單維修明細表",
      parent: "維修相關",
      roleList: ["售服主管", "服務廠主管", "技術主管"],
    },
    {
      id: 12,
      title: "維修相關-重修明細表",
      parent: "維修相關",
      roleList: ["售服主管", "服務廠主管", "技術主管"],
    },
    {
      id: 13,
      title: "維修相關-保固明細表",
      parent: "維修相關",
      roleList: ["售服主管", "服務廠主管", "技術主管"],
    },
  ]);
  return { sideMenuItems };
};
