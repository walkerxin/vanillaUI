class Tooltip {
  constructor($root) {
    this.$root = $root
    this.data = $root.dataset
    this.$root.tooltip = this

    this.render()
  }

  render() {
    const $div = document.createElement('div')
    $div.innerText = this.data.content
    this.$root.appendChild($div)
    $div.classList.add('vanilla-tooltip')
    this.$tooltip = $div

  }

  display() {
    this.$tooltip.classList.add('show')
  }

  hide() {
    this.$tooltip.classList.remove('show')
  }
}

document.querySelectorAll('[data-name="tooltip"]').forEach($node => {
  $node.onmouseenter = function() {
    if ($node.tooltip) {
      $node.tooltip.display()
    } else {
      new Tooltip($node).display()
    }
  }

  $node.onmouseleave = function() {
    $node.tooltip && $node.tooltip.hide()
  }
})