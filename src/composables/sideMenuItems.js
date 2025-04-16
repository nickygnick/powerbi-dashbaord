import { ref } from "vue";

export const useSideMenuItems = () => {
  const sideMenuItems = ref([
    {
      id: 0,
      title: "首頁",
      parent: "首頁",
      roleList: [
        "",
        "管理員",
        "售服主管",
        "服務廠主管",
        "接待主管",
        "服務顧問",
        "零件主管",
        "零件人員",
        "技術主管",
        "技師",
        "財務",
        "保險專員",
        "索賠員",
      ],
      link: "",
    },
    {
      id: 1,
      title: "會計相關-應收帳款明細表",
      parent: "會計相關",
      roleList: ["管理員","售服主管", "服務廠主管", "財務"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=52986780cd9db57b5cdb&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 2,
      title: "會計相關-發票明細表",
      parent: "會計相關",
      roleList: ["管理員","售服主管", "服務廠主管", "財務"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=1269a28a98bf9329c99f&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 3,
      title: "經營相關-回廠率查詢",
      parent: "經營相關",
      roleList: ["管理員","售服主管", "服務廠主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=465a4f99554863911ac1&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 4,
      title: "零件相關-出貨成本查詢",
      parent: "零件相關",
      roleList: ["管理員","售服主管", "服務廠主管", "零件主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=30a8c840a0ee740e9a3e&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 5,
      title: "零件相關-零件進貨退回明細表",
      parent: "零件相關",
      roleList: ["管理員","售服主管", "服務廠主管", "零件主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=2be26881e08ac77ba1c3&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 6,
      title: "零件相關-零件銷售退回明細表",
      parent: "零件相關",
      roleList: ["管理員","售服主管", "服務廠主管", "零件主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=a0cc17df5274b4957aeb&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 7,
      title: "零件相關-零件出貨明細表",
      parent: "零件相關",
      roleList: ["管理員","售服主管", "服務廠主管", "零件主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0f773a5e2ed0aa31816d&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 8,
      title: "零件相關-月結存貨明細表",
      parent: "零件相關",
      roleList: ["管理員","售服主管", "服務廠主管", "零件主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=9a4cd1a78000360e4483&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 9,
      title: "零件相關-零件銷售明細表",
      parent: "零件相關",
      roleList: ["管理員","售服主管", "服務廠主管", "零件主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=0b81eacee030bb750701&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 10,
      title: "零件相關-零件收益及毛利分析",
      parent: "零件相關",
      roleList: ["管理員","售服主管", "服務廠主管", "零件主管", "零件人員"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=838a16ef9e97bcb6e1a1&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 11,
      title: "維修相關-工單維修明細表",
      parent: "維修相關",
      roleList: ["管理員","售服主管", "服務廠主管", "技術主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=e71ab409797476166c55&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 12,
      title: "維修相關-重修明細表",
      parent: "維修相關",
      roleList: ["管理員","售服主管", "服務廠主管", "技術主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=81692c01a7b3501a8602&filter=pub_pay/dealer_id eq '{{code}}'"
    },
    {
      id: 13,
      title: "維修相關-保固明細表",
      parent: "維修相關",
      roleList: ["管理員","售服主管", "服務廠主管", "技術主管"],
      link: "https://app.powerbi.com/reportEmbed?reportId=d0a56937-4a6b-4082-b021-c9a491c9ae78&autoAuth=true&ctid=81fa766e-a349-4867-8bf4-ab35e250a08f&pageName=cbb27f790e6aad4d5abb&filter=pub_pay/dealer_id eq '{{code}}'"
    },
  ]);
  return { sideMenuItems };
};
