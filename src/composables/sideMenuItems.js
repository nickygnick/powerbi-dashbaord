import { ref } from "vue";

export const useSideMenuItems = () => {
  const sideMenuItems = ref([
    {
      id: 0,
      title: "首頁",
      parent: "首頁",
      roleList: [
        "",
        "帳號(總管理者)",
        "售服部門主管(總監)",
        "集團(跨廠權限)售服主管",
        "售服主管",
        "服務廠主管",
        "據點主管",
        "接待主管",
        "服務顧問",
        "零件主管",
        "(零件)主管",
        "零件人員",
        "(技術)主管",
        "技術主管",
        "技師",
        "財務",
        "財務會計",
        "保險專員",
        "索賠員",
      ],
      link: "",
    },
    {
      id: 1,
      title: "會計相關-應收帳款明細表",
      parent: "會計相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "財務","財務會計"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=52986780cd9db57b5cdb&filter=pub_pay/dealer_id eq {{code}}"
    },
    {
      id: 2,
      title: "會計相關-發票明細表",
      parent: "會計相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "財務","財務會計"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=1269a28a98bf9329c99f&filter=invoice_master/dealer_id eq {{code}}"
    },
    {
      id: 3,
      title: "經營相關-回廠率查詢",
      parent: "經營相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=465a4f99554863911ac1&filter=return_rate/dealer_id eq {{code}}"
    },
    {
      id: 4,
      title: "經營相關-代步車使用率",
      parent: "經營相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=7ee6ccb954333dddae12&filter=flattened_dates_loan_master/dealer_id eq {{code}}"
    },
    {
      id: 5,
      title: "零件相關-出貨成本查詢",
      parent: "零件相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=30a8c840a0ee740e9a3e&filter=part_sales_master/dealer_id eq {{code}}"
    },
    {
      id: 6,
      title: "零件相關-零件進貨退回明細表",
      parent: "零件相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=2be26881e08ac77ba1c3&filter=part_import_return/dealer_id eq {{code}}"
    },
    {
      id: 7,
      title: "零件相關-零件銷售退回明細表",
      parent: "零件相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=a0cc17df5274b4957aeb&filter=part_sales_return/dealer_id eq {{code}}"
    },
    {
      id: 8,
      title: "零件相關-零件出貨明細表",
      parent: "零件相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0f773a5e2ed0aa31816d&filter=part_export/dealer_id eq {{code}}"
    },
    {
      id: 9,
      title: "零件相關-月結存貨明細表",
      parent: "零件相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=9a4cd1a78000360e4483&filter=monthly_part_inventory/dealer_id eq {{code}}"
    },
    {
      id: 10,
      title: "零件相關-零件銷售明細表",
      parent: "零件相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0b81eacee030bb750701&filter=part_sales_master/dealer_id eq {{code}}"
    },
    {
      id: 11,
      title: "零件相關-零件收益及毛利分析",
      parent: "零件相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=838a16ef9e97bcb6e1a1&filter=part_sales_master/dealer_id eq {{code}}"
    },
    {
      id: 12,
      title: "維修相關-工單維修明細表",
      parent: "維修相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "技術主管","(技術)主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=e71ab409797476166c55&filter=work_master/dealer_id eq {{code}}"
    },
    {
      id: 13,
      title: "維修相關-重修明細表",
      parent: "維修相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "技術主管","(技術)主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=81692c01a7b3501a8602&filter=rebuild_master/dealer_id eq {{code}}"
    },
    {
      id: 14,
      title: "維修相關-保固明細表",
      parent: "維修相關",
      roleList: ["帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "技術主管","(技術)主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=cbb27f790e6aad4d5abb&filter=warranty_master/dealer_id eq {{code}}"
    },
    {
      id: 15,
      title: "回廠率大表",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=465a4f99554863911ac1"
    },
    {
      id: 16,
      title: "OP Code查進廠車數",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=107bd46af89f4d993ce0"
    },
    {
      id: 17,
      title: "回廠車籍表",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=e71ab409797476166c55"
    },
    {
      id: 18,
      title: "久未回廠車籍表",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=132fda7d531352d39cdd"
    },
    {
      id: 19,
      title: "有效車口數",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=16fa36cf84d80d598266"
    },
    {
      id: 20,
      title: "代步車使用率",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=8ab30fec965e619053c1"
    },
    {
      id: 21,
      title: "經銷商庫存成本",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=e50ee0e406162b131441"
    },
    {
      id: 22,
      title: "出貨成本查詢",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=30a8c840a0ee740e9a3e"
    },
    {
      id: 23,
      title: "零配件銷售明細表",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0b81eacee030bb750701"
    },
    {
      id: 24,
      title: "Paycode零配件銷售成本",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=034ac7a9607a0a0099a9"
    },
    {
      id: 25,
      title: "板金烤漆營業額",
      parent: "總管理報表-維修相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=6b659b5ae430b398e69a"
    },
    {
      id: 26,
      title: "預約作業進廠分析",
      parent: "總管理報表-維修相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=5e3cf6ee-54df-42e8-ba09-fda9c56a1c7f&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=735cc791827010a50d79"
    },  
  ]);
  return { sideMenuItems };
};
