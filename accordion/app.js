const closeAccordionItem = (accordion_header_to_be_closed) => {
  const accordion_header_id = accordion_header_to_be_closed.dataset.accordionHeader
  const accordion_body_to_closed = document.querySelector(`[data-accordion-body="${ accordion_header_id }"]`)

  accordion_header_to_be_closed.classList.remove('active')
  accordion_body_to_closed.classList.remove('active')
}

const findAccordionToBeClosed = (clicked_accordion_header) => (
  Array
    .from(document.querySelectorAll('[data-js="accordion-header"]'))
    .filter(accordion_header => accordion_header !== clicked_accordion_header)
    .find(accordion_header => accordion_header.classList.contains('active'))
)

const handleAccordionClick = (e) => {
  const accordion_header_father = e.target.closest('[data-accordion-header]')

  if (!accordion_header_father) return

  const accordion_header_id = accordion_header_father.dataset.accordionHeader
  
  const clicked_accordion_header = document.querySelector(`[data-accordion-header="${ accordion_header_id }"]`)
  const accordion_item_to_be_opened = document.querySelector(`[data-accordion-body="${ accordion_header_id }"]`)

  const accordion_header_to_be_closed = findAccordionToBeClosed(clicked_accordion_header)

  if (accordion_header_to_be_closed) {
    closeAccordionItem(accordion_header_to_be_closed)
  }

  accordion_item_to_be_opened.classList.toggle('active')
  clicked_accordion_header.classList.toggle('active')
}

const accordion = document.querySelector('[data-js="accordion"]')

accordion.addEventListener('click', handleAccordionClick)
