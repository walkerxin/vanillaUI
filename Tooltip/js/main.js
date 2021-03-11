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
    $div.classList.add('vanilla-tooltip')
    this.data.placement && $div.classList.add(this.data.placement)
    this.$tooltip = $div
    this.$root.classList.add('vanilla-tooltip-wrapper')
    this.$root.appendChild($div)
  }

  display() {
    if (this.$tooltip && this.$tooltip.offsetParent === null) {
      this.$root.appendChild(this.$tooltip)
    }
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