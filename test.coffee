omitHash = (val) ->
  delete val.hash
  val

Tinytest.add "handlebars_obj", (test) ->
  Template["handlebars_obj_tests"].helpers
    "test1": (val) -> test.equal(omitHash(val), {})
    "test2": (val) -> test.equal(omitHash(val), {one: 1, two: 2})
    "test3": (val) -> test.equal(omitHash(val), {one: 1})
    "test4": (val) -> test.equal(omitHash(val), {})
    "test5": (val) -> test.equal(omitHash(val), {one: 1, two: 2})
    "test6": (val) -> test.equal(omitHash(val), {one: 1, two: 2})
    "test7_obj":   -> {}
    "test7": (val) -> test.equal(omitHash(val), {})
    "test8_obj":   -> {undef: undefined}
    "test8": (val) -> test.equal(omitHash(val), {})
    "test9_obj":   -> {two: 2, three: 3}
    "test9": (val) -> test.equal(omitHash(val), {one: 1, two: 2, three: 3, four: 4})
    "test10_obj1": -> {one: 9}
    "test10_obj2": -> {one: 1}
    "test10": (val)-> test.equal(omitHash(val), {one: 1})

  UI.render Template["handlebars_obj_tests"]
