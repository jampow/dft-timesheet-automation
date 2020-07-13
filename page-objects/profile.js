module.exports = {
  url: 'https://performancemanager4.successfactors.com/xi/ui/peopleprofile/pages/index.xhtml',
  elements: {
    menuPonto: '#__xmlview0--objectPage-anchBar-__section1-__xmlview0--objectPage-5-anchor',
    ajustarPonto: '[title="Editar Ajustes de Marcação"]'
  },
  commands: [{
  }],
  sections: {
    timeModal: {
      selector: '#__dialog2',
      elements: {
        addItem: '[title="+"]'
      },
      sections: {
        lastItem: {
          selector: '(//div[@role="form"])[last()]',
          locateStrategy: 'xpath',
          elements: {
            dateInput: {
              selector: '((//div[@role="form"])[last()]//input)[1]',
              locateStrategy: 'xpath'
            },
            timeInput: {
              selector: '((//div[@role="form"])[last()]//input)[2]',
              locateStrategy: 'xpath'
            },
            justificationInput: {
              selector: '((//div[@role="form"])[last()]//input)[3]',
              locateStrategy: 'xpath'
            },
            firstItemDropDown: '.sapMPopover > [role="application"]'
          }
        }
      }
    }
  }
}
