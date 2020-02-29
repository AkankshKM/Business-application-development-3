const org1_depts = [
  {
      name: 'accounting',
      children: [
          { name: 'accounting payable', children: [] },
          { name: 'accounting receivable', children: [] },
      ],
  },
  {
      name: 'finance',
      children: [],
  },
]

const org2_depts = [
  {
      name: 'accounting',
      children: [
          { name: 'accounting payable', children: [] },
          {
              name: 'accounting receivable',
              children: [{ name: 'cash', children: [] }, { name: 'check', children: [] }],
          },
      ],
  },
  {
      name: 'finance',
      children: [{ name: 'investment', children: [] }],
  },
]
str = ""
function build(arr) {
  if (arr.length != 0) {
      str += "<ul>"
      arr.forEach(element => {
          str += "<li>" + element.name + "</li>\n";
          build(element.children)
      });
      str += "</ul>\n"
      return
  }
  else {
      return
  }

}
build(org1_depts);
console.log(str);
document.getElementById("a").innerHTML = str;

build(org2_depts);
console.log(str);
document.getElementById("b").innerHTML = str;