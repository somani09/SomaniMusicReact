export const pageLeaveVariants = {
    visible:{
        opacity:1,
        transition:{
            staggerChildren: 1
        }
    },
    exit: {
        opacity: 0,
        transition: {
          when: "afterChildren",
        },
      },
}

export const logoVariants = {
  hidden :{
      opacity: 0,
  },
  visible:{
      opacity: 1,
      transition:{
        delay : .2,
          duration: 1
      }
  }
}

export const navDropDownVariants = {
  hidden :{
      opacity: 0,
      y : -50
  },
  visible:{
      opacity: 1,
      y: 0,
      transition:{
          type: 'tween',
          delay : 1.2,
          duration: .3
      }
  }
}

export const mainVariants = {
  hidden :{
      opacity: 0,
  },
  visible:{
      opacity: 1,
      transition:{
        when: "beforeChildren",
        delay: 1.5,
        duration: .5
      }
  }
}

export const buttonVariants = {
    hover: {
      scale: 2,
      transition: {
        duration: 0.2,
        yoyo: 5
      }
    }
}

  export const latestVariants = {
    hidden :{
        opacity: 0,
    },
    visible: (delay) => ({
        opacity: 1,
        transition:{
            type: 'tween',
            delay: delay,
            duration: .8
        }
    })
}


export const youtubeLinkContainerVariants = {
  hidden: {
    opacity:0
  },
  visible: (delay) => ({
    opacity:1,
    transition :{
      duration:.1,
      delay:delay + .5
    }
  })
}

export const youtubeLinkVariants = {
  hidden: {
    height:0
  },
  visible: (delay) => ({
    height:"100%",
    transition: {
      duration:.7,
      delay:delay + .5
    }
  })
}

export const storeTitleVariants = {
  hidden :{
      opacity: 0,
      backgroundSize: 0
  },
  visible:(delay) => ({
      opacity: 1,
      backgroundSize: "80%",
      transition:{
          type: 'tween',
          delay : delay + 1.2,
          duration: .5
      }
  })
}

export const storeListVariants = {
    hidden: (i) => ({
        opacity: 0,
        y: -50 * i[0],
      }),
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i[1] + 1.5 + i[0] * 0.5,
        },
      }),
}

export const songListVariants = {
    hidden: (i) => ({
        opacity: 0,
        y: -50 * i,
      }),
      visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay:.2 + i[1] + i[0] * 0.5,
          duration:.5
        },
      }),
}

export const songListIconsVariants = {
    hidden: (i) => ({
        opacity: 0,
        x: -50 * i[0],
      }),
      visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
          delay:i[1] + i[0] * 0.5,
        },
      }),
}

export const aboutVariants = {
  hidden: {
    opacity:0,
    height:0
  },
  visible: (delay) => ({
    opacity:1,
    height:"80%",
    transition: {
      type:"spring",
      stiffness: 70,
      duration:.5,
      delay:delay + .2
    }
  })
}

export const footerVariants = {
  hidden: (i) => ({
      opacity: 0,
      x: -50 * i[0],
    }),
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay:i[1] + i[0] * 0.5,
      },
    }),
}

export const backgroundvariants = {
  initial:{
    opacity: 0

  },
  animate: {
    opacity: 1,
    transition: {
      duration:2
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration:2
    }
  }
};