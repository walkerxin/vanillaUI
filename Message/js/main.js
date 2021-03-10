const defaultContent = {
  success: '这是一条成功消息',
  warning: '警告！警告消息！',
  info: '这是一条通知消息',
  error: '错误！错误消息！'
}

class Message {
  constructor({type = 'success', content}) {
    this.type = type
    this.content = content || defaultContent[type] || ''
    this.init()
  }

  init() {
    this.render()
    this.show()
    setTimeout(() => this.destroy(), 3000)
  }

  render() {
    const $div = document.createElement('div')
    const $i = document.createElement('i')
    const $span = document.createElement('span')

    $div.classList.add('vanilla-message-box')
    $div.classList.add(this.type)
    $i.classList.add('iconfont')
    $i.classList.add(`icon-${this.type}`)
    $span.innerText = this.content

    $div.appendChild($i)
    $div.appendChild($span)
    document.body.appendChild($div)
    this.$messageBox = $div
  }

  show() {
    this.$messageBox.classList.add('show')
  }

  destroy() {
    this.$messageBox.classList.remove('show')
    this.$messageBox.remove()
  }
}

document.querySelectorAll('.button-group>button').forEach($button => {
  $button.onclick = function() {
    new Message({ type: this.dataset.type })
  }
})