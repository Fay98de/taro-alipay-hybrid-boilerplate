Component({
  onInit() {
    console.log('component onInit')
    my.alert({ content: 'component onInit' })
  },
  deriveDataFromProps() {
    console.log('component deriveDataFromProps')
  },
  didMount() {
    console.log('component didMount')
  },
  didUpdate() {
    console.log('component didUpdate')
  },
  didUnmount() {
    console.log('component didUnmount')
  },
})
