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
        "集團售服的廠端角色",
        "售後視角",
      ],
      link: "",
    },
    {
      id: 1,
      title: "會計相關-應收帳款明細表",
      parent: "會計相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "財務","財務會計"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=52986780cd9db57b5cdb&filter=pub_pay/{{code}}"
    },
    {
      id: 2,
      title: "會計相關-發票明細表",

      parent: "會計相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "財務","財務會計"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=1269a28a98bf9329c99f&filter=invoice_master/{{code}}"
    },
    {
      id: 3,
      title: "經營相關-回廠率查詢",
      parent: "經營相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=465a4f99554863911ac1&filter=return_rate/{{code}}"
    },
    {
      id: 4,
      title: "經營相關-代步車使用率",
      parent: "經營相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=7ee6ccb954333dddae12&filter=flattened_dates_loan_master/{{code}}"
    },
    {
      id: 5,
      title: "零件相關-出貨成本查詢",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=30a8c840a0ee740e9a3e&filter=part_sales_master/{{code}}"
    },
    {
      id: 6,
      title: "零件相關-零件進貨退回明細表",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=2be26881e08ac77ba1c3&filter=part_import_return/{{code}}"
    },
    {
      id: 7,
      title: "零件相關-零件銷售退回明細表",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=a0cc17df5274b4957aeb&filter=part_sales_return/{{code}}"
    },
    {
      id: 8,
      title: "零件相關-零件出貨明細表",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0f773a5e2ed0aa31816d&filter=part_export/{{code}}"
    },
    {
      id: 9,
      title: "零件相關-月結存貨明細表",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=9a4cd1a78000360e4483&filter=monthly_part_inventory/{{code}}"
    },
    {
      id: 10,
      title: "零件相關-零件銷售明細表",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0b81eacee030bb750701&filter=part_sales_master/{{code}}"
    },
    {
      id: 11,
      title: "零件相關-零件收益及毛利分析",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=838a16ef9e97bcb6e1a1&filter=part_sales_master/{{code}}"
    },
    {
      id: 12,
      title: "零件相關-Shelf Life Code 統計",
      parent: "零件相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "零件主管","(零件)主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=195f01f88a2af920dd30&filter=shelf_life_code/{{code}}"
    },
    {
      id: 13,
      title: "維修相關-工單維修明細表",
      parent: "維修相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "技術主管","(技術)主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=e71ab409797476166c55&filter=work_master/{{code}}"
    },    
    {
      id: 15,
      title: "維修相關-重修明細表",
      parent: "維修相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "技術主管","(技術)主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=81692c01a7b3501a8602&filter=rebuild_master/{{code}}"
    },
    {
      id: 16,
      title: "維修相關-保固明細表",
      parent: "維修相關",
      roleList: ["售後視角","集團售服的廠端角色","帳號(總管理者)","售服部門主管(總監)","廠端運維管理員","集團(跨廠權限)售服主管","售服主管", "服務廠主管","據點主管", "技術主管","(技術)主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=4b273743-f7e6-4f44-9066-22899833e159&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=cbb27f790e6aad4d5abb&filter=warranty_master/{{code}}"
    },
    {
      id: 17,
      title: "回廠率大表",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=465a4f99554863911ac1"
    },
    {
      id: 18,
      title: "OP Code查進廠車數",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=107bd46af89f4d993ce0"
    },
    {
      id: 19,
      title: "回廠車籍表",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=e71ab409797476166c55"
    },
    {
      id: 20,
      title: "久未回廠車籍表",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=132fda7d531352d39cdd"
    },
    {
      id: 21,
      title: "WIP查詢",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=360f4e2aaa5c21f887e3"
    },
    {
      id: 22,
      title: "結帳備注查詢",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=7bc8a41b7085119ae24a"
    },
    {
      id: 23,
      title: "有效車口數",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=16fa36cf84d80d598266"
    },
       {
      id: 24,
      title: "代步車出借事由分析",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=92117537171166fd6796"
    },
    {
      id: 25,
      title: "代步車使用率",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=8ab30fec965e619053c1"
    },
    {
      id: 26,
      title: "KPI進廠車數統計",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=095804c07c13ca6d1eb4"
    },
    {
      id: 27,
      title: "維修收入車齡及Paycode",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=a498cb481ea09c5ead99"
    },
    {
      id: 28,
      title: "經銷商KPI",
      parent: "總管理報表-經營相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=219d4b6b39890ffc594c"
    },
    {
      id: 29,
      title: "經銷商庫存成本",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=e50ee0e406162b131441"
    },
    {
      id: 30,
      title: "出貨成本查詢",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=30a8c840a0ee740e9a3e"
    },
    {
      id: 31,
      title: "零配件銷售明細表",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0b81eacee030bb750701"
    },
    {
      id: 32,
      title: "某月零件銷售數量",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=3ca62e4712fe9fd67be9"
    },
    {
      id: 33,
      title: "服務廠營運分析",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=95a8a909d4204d03fc60"
    },
    {
      id: 34,
      title: "Polestar年度銷售",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=f44dc90413ea13334e97"
    },
    {
      id: 35,
      title: "Paycode零配件銷售成本",
      parent: "總管理報表-零件相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=034ac7a9607a0a0099a9"
    },
    {
      id: 36,
      title: "鈑金烤漆營業額",
      parent: "總管理報表-維修相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=6b659b5ae430b398e69a"
    },
    {
      id: 37,
      title: "工時與引電收入",
      parent: "總管理報表-維修相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=d645272b2eb4bfccfc18"
    },
    {
      id: 38,
      title: "預約作業進廠分析",
      parent: "總管理報表-維修相關",
      roleList: ["售服部門主管(總監)","廠端運維管理員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=23df134b-0c1b-4ca8-b171-986c0f2e43b4&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=735cc791827010a50d79"
    },  
  ]);
  return { sideMenuItems };
};
