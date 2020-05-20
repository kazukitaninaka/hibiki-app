const Member = require('../models/memberModel');
const { dynamicSort } = require('../utils/sort');

exports.getMembers = (generation) => {
  return async function (req, res) {
    const members = await Member.find({ generation });
    const bigMembers = await Member.find({ generation, big: true });

    // Matsuri
    const matsuriFrontMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.matsuri.front));
    const matsuriShoutMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.matsuri.shout));
    const matsuriSoloOneMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.matsuri.soloOne));
    const matsuriSoloTwoMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.matsuri.soloTwo));
    const matsuriStartMembers = bigMembers
      .slice()
      .sort(dynamicSort((obj) => obj.matsuri.start));

    // Opening
    const openingFrontMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.opening.front));
    const openingKaraMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.opening.kara));
    const openingStartMembers = bigMembers
      .slice()
      .sort(dynamicSort((obj) => obj.opening.start));

    // Solo
    const soloFrontMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.solo.front));
    const soloKankanMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.solo.kankan));

    // Seigaiha
    const seigaihaFrontMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.seigaiha.front));

    // Zuiun
    const zuiunFrontMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.zuiun.front));

    // Hibiki
    const hibikiFrontMembers = members
      .slice()
      .sort(dynamicSort((obj) => obj.hibiki.front));

    try {
      res.status(200).render(`${generation}th`, {
        members,
        bigMembers,
        matsuriFrontMembers,
        matsuriShoutMembers,
        matsuriSoloOneMembers,
        matsuriSoloTwoMembers,
        matsuriStartMembers,
        openingFrontMembers,
        openingKaraMembers,
        openingStartMembers,
        soloFrontMembers,
        soloKankanMembers,
        seigaihaFrontMembers,
        zuiunFrontMembers,
        hibikiFrontMembers,
      });
    } catch (error) {
      res.status(404).json({
        status: 'fail',
        message: error,
      });
    }
  };
};

exports.createMember = async (req, res) => {
  const member = await Member.create(req.body);

  try {
    res.status(201).json({
      status: 'success',
      data: {
        member,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.updateMember = async (req, res) => {
  const member = await Member.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  try {
    res.status(201).json({
      status: 'success',
      data: {
        member,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.selectNumbers_get = async (req, res) => {
  try {
    res.status(200).render('selectNumbers');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};

exports.selectNumbers_post = async (req, res) => {
  const members = await Member.find({});
  const bigMembers = await Member.find({ big: true });
  try {
    res.status(200).render('addPosition', {
      data: req.query,
      members,
      bigMembers,
    });
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
const modifyData = (arg, members, number, position) => {
  if (typeof arg === 'object' && arg !== null) {
    if (arg !== undefined) {
      let filtered = arg.filter((name) => name !== '');
      if (Object.keys(filtered).length !== 0) {
        filtered.forEach((name) => {
          let member = members.find((member) => member.name === name);
          member[number][position]++;
        });
      }
    }
  } else {
    if (arg !== '' && arg !== undefined) {
      let member = members.find((member) => member.name === arg);
      member[number][position]++;
    }
  }
};

exports.addPosition = async (req, res) => {
  let members = await Member.find();
  const {
    opening_front,
    opening_kara,
    opening_start,
    matsuri_front,
    matsuri_shout,
    matsuri_soloOne,
    matsuri_soloTwo,
    matsuri_start,
    solo_front,
    solo_kankan,
    seigaiha_front,
    zuiun_front,
    hibiki_front,
  } = req.body;

  // console.log(opening_kara);
  // console.log(opening_start);
  // console.log(matsuri_front);
  // console.log(matsuri_shout);
  // console.log(matsuri_soloOne);
  // console.log(matsuri_soloTwo);
  // console.log(matsuri_start);
  modifyData(opening_front, members, 'opening', 'front');
  modifyData(opening_kara, members, 'opening', 'kara');
  modifyData(opening_start, members, 'opening', 'start');
  modifyData(matsuri_front, members, 'matsuri', 'front');
  modifyData(matsuri_shout, members, 'matsuri', 'shout');
  modifyData(matsuri_soloOne, members, 'matsuri', 'soloOne');
  modifyData(matsuri_soloTwo, members, 'matsuri', 'soloTwo');
  modifyData(matsuri_start, members, 'matsuri', 'start');
  modifyData(solo_front, members, 'solo', 'front');
  modifyData(solo_kankan, members, 'solo', 'kankan');
  modifyData(seigaiha_front, members, 'seigaiha', 'front');
  modifyData(zuiun_front, members, 'zuiun', 'front');
  modifyData(hibiki_front, members, 'hibiki', 'front');

  for (let member of members) {
    await Member.findOneAndUpdate({ name: member.name }, member);
  }

  try {
    res.status(200).render('doneAdding');
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      message: error,
    });
  }
};
